export const state = () => {
  users: [];
  hloo: "ssdsdsd";
};

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
export const actions = {
  async getUsers() {
    const users = await this.$axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    commit("addUsers", users);
    return users;
  },
};
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users });
  },
};
