<template lang="pug">
v-dialog(v-model="clickHandler", fullscreen="", hide-overlay="")
  v-card(tile="")
    v-toolbar(dark, color="#012e48", height="100px", background-color="red")
      v-btn(icon="", @click="clickHandler")
        v-icon mdi-close
      v-toolbar-title التقارير

      v-spacer
      .con
        v-tabs(v-model="tab", centered, grow, dark, background-color="#2c3e50")
          v-tabs-slider(color="#e55039")
          v-tab(v-for="item in items2", :key="item")
            | {{ item }}
            v-icon(x-large="") mdi-chart-box

    v-tabs-items(v-model="tab")
      v-tab-item
        v-card-title.text-h5
          | المشتريات
        v-data-table.elevation-1(
          :headers="headers",
          :items="desserts",
          :items-per-page="15"
        )
          template(v-slot:item.actions="{ item }", v-if="loggedInUser.isAdmain")
            v-icon.mr-2(small="", @click="editItem(item)")
              | mdi-pencil
            v-icon(small="", @click="deleteItem(item.id)")
              | mdi-delete

      v-tab-item
        v-card(flat="")
          v-card-title.text-h5
            | An awesome title
          v-card-text
            p
              | Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            p
              | Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            p.mb-0
              | Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
      v-tab-item
        v-card(flat="")
          v-card-title.text-h5
            | An even better title
          v-card-text
            p
              | Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            p.mb-0
              | Etiam vitae tortor. Curabitur

  v-row(justify="center")
</template>

<script>
import {  mapGetters } from "vuex";
export default {
  props: ["dialogReport"],
  data() {
    return {
      tab: null,
      search: "",

      items2: ["المشتريات", "المبيعات", "المبيعات"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      value: 1,
      search: "",
      headers: [
        {
          text: "All Items",
          align: "start",

          value: "allIetms",
        },
        { text: "Sumation", value: "sumation" },
        { text: "Additions", value: "additions" },
        { text: "Created", value: "createdAt" },
        { text: "Casher Name", value: "casherName" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
    };
  },
  async fetch() {
    await this.$axios
      .get("http://localhost:8000/api/reportItems/findPublished")
      .then((result) => {
        this.items = result.data;
        // this.desserts= ;
        console.log();

        this.desserts = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteItem(id) {
      console.log(id);
      this.$axios
        .get("http://localhost:8000/api/reportItems/unDisplayPublished/" + id)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    clickHandler(e) {
      this.$emit("toggle");
    },
  },
  computed: {
     ...mapGetters(["isAuthenticated", "loggedInUser"]),
    color() {
      switch (this.value) {
        case 0:
          return "#000";
        case 1:
          return "#000";
        case 2:
          return "#000";
        case 3:
          return "#000";
        default:
          return "#000";
      }
    },
  },
};
</script>
<style  scoped>
@font-face {
  font-family: "GE-Hili";
  src: url("../assets/fonts/GE-Hili-Light_15.otf");
}
.con {
  color: rgb(5, 27, 27);
  font-family: "GE-Hili";
  width: 40%;
  margin-right: 30%;
}
</style>
