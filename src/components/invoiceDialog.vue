<template lang="pug">

</template>
<script>
export default {
  props: ["dialogInvoice"],
  data() {
    return {
      rowData:[]
    };
  },
  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
    cl(){
      console.log(this.my);
    }
  },
};
</script>
