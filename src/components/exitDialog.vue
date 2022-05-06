<template lang="pug">
v-dialog(v-model="clickHandler", max-width="400", persistent)
  v-card.text-center(shaped)
    v-card-title.text-h5
      | هل انتا متاكد من تسجيل الخروج
    v-card-text.text-h3.subTitle(v-model="test")
      |
      | {{ test }}
    v-card-actions
      v-spacer
      v-btn.text-h4(color="red darken-1", text="", @click="clickHandler")
        | الغاء
      v-btn.text-h4(color="green darken-1", text="", @click="close")
        | موافق
</template>
<script>
export default {
  props: ["dialogClose", "test"],
  data() {
    return {};
  },

  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
    close: function () {
      this.$auth.logout();
      this.$router.go(-1);
    },
  },
};
</script>
<style  scoped>
.subTitle{
  color: blue !important;
}
</style>
