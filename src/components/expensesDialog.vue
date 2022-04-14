<template lang="pug">
v-dialog(v-model="clickHandler", max-width="700px", persistent)
  v-card
    v-card-title
      span.text-h5 المصاريف اليومية
    v-card-text
      v-container.text-h5
        v-row
          v-col.text-h2(cols="12", sm="6")
            v-text-field.text-h4(
              label="البيان*",
              required="",
              v-model="description"
            )
          v-col.text-h4(cols="12", sm="6")
            v-text-field.text-h4(
              label="القمية",
              hint="الرجاء ادخال القمية",
              prefix="JD",
              v-model="value"
            )

    v-card-actions
      v-spacer
      v-btn.text-h4(color="blue darken-1", text="", @click="clickHandler")
        | الغاء
      v-btn.text-h4(color="blue darken-1", text="", @click="clickHandlerPost")
        | حفظ
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["dialogExpenses"],
  data() {
    return {
      description: "",
      value: 0,
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },

  methods: {
    clickHandlerPost() {
      this.$axios
        .post("http://localhost:8000/api/expenses/", {
          description: this.description,
          value: this.value,
          casherName: this.loggedInUser.name,
        })
        .then(function (response) {

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.clickHandler()
    },
    clickHandler(e) {
      this.$emit("toggle");
    },
  },
};
</script>
