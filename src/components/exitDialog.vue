<template lang="pug">
v-dialog(v-model="clickHandler", max-width="290", persistent)
  v-card
    v-card-title.text-h5
      | Use Google&apos;s location service?
    v-card-text(v-model="test")
      | {{test}}
    v-card-actions
      v-spacer
      v-btn(color="green darken-1", text="", @click="clickHandler")
        | Disagree
      v-btn(color="green darken-1", text="", @click="close")
        | Agree

</template>
<script>
export default {
   props: ["dialogClose", "test"],
  data() {
    return {

    };
  },

  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
    close: function () {
      this.$auth.logout();
     this.$router.go(-1)
    },
  },
};
</script>
