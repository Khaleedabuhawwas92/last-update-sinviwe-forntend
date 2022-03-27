import Vuex from "vuex";
import mongoose from "mongoose";

export default new Vuex.Store({
  state: () => ({
    lo: false,
    databases: [],
    databaseName: "",
    collections: [],
    records: [],
    collectionName: "",
    totalNumberOfResults: null,
  }),
  mutations: {},
  actions: {
    async connect({ state, dispatch }, connectionString) {
      await mongoose.connect(connectionString, { useNewUrlParser: true });
      state.connection = mongoose.connection;
      await dispatch("getDatabases");
    },
    async getDatabases({ state }) {
      let ad = mongoose.mongo.Admin;
      try {
        let databaseList = await new ad(state.connection.db).listDatabases();
        state.databases = databaseList.databases;
      } catch (e) {
        console.log(e);
      }
    },
    async getCollections({ state }) {
      state.collections = await state.connection.db.listCollections().toArray();
    },
    async find({ state }, query = {}) {
      state.totalNumberOfResults = null;
      const collection = state.connection.db.collection(state.collectionName);
      const cursor = await collection.find(query);
      cursor.count((err, result) => {
        if (err) return;

        state.totalNumberOfResults = result;
      });
      state.records = await cursor.toArray();
    },
    async setDatabase({ state, dispatch }, databaseName) {
      state.connection = state.connection.useDb(databaseName);
      state.databaseName = databaseName;
      state.collectionName = "";
      state.records = [];
      await dispatch("getCollections");
    },
    async setCollection({ state }, collectionName) {
      state.collectionName = collectionName;
    },
  },
});
