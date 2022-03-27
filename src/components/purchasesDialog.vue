<template lang="pug">
  v-dialog(v-model="clickHandler", max-width="700px",persistent)
    v-card
      v-card-title
        span.text-h5 المصاريف اليومية
      v-card-text
        v-container.text-h5
          v-row
            v-col.text-h2(cols="12", sm="6", )
              v-text-field.text-h4(label="البيان*", required="")
            v-col.text-h4(cols="12", sm="6", )
              v-text-field.text-h4(
                label="القمية",
                hint="الرجاء ادخال القمية"
              )

      v-card-actions
        v-spacer
        v-btn.text-h4(color="blue darken-1", text="", @click="clickHandler")
          | الغاء
        v-btn.text-h4(color="blue darken-1", text="", @click="clickHandler")
          | حفظ
</template>
<script>
export default {
   props: ["dialogPurchases"],
  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
  },
}
</script>
