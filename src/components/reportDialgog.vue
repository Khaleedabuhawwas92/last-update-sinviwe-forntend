<template lang="pug">
v-dialog(v-model="clickHandler", fullscreen="", hide-overlay="")
  v-card(tile="")
    v-toolbar(dark="", color="#012e48", height="100px", background-color="red")
      v-btn(icon="", dark="", @click="clickHandler")
        v-icon mdi-close
      v-toolbar-title التقارير

      v-spacer
      .con
        v-tabs(
          v-model="tab",
          align-with-title="",
          centered,
          width="250px",
          grow
        )
          v-tabs-slider(color="yellow")
          v-tab(v-for="item in items", :key="item")
            | {{ item }}

    v-tabs-items(v-model="tab")
      v-tab-item(v-for="item in items", :key="item")
        v-card(flat="")
          v-text-field(
            v-model="search",
            append-icon="mdi-magnify",
            label="Search",
            single-line="",
            hide-details=""
          )
          v-data-table.elevation-1(
            :headers="headers",
            :items="desserts",
            :items-per-page="16",
            :search="search"
          )

  v-row(justify="center")
</template>
<script>
export default {
  props: ["dialogReport"],
  data() {
    return {
      tab: null,
      search: "",
      items: ["ابراهيم المنيك", "shopping", "videos", "images", "news"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      value: 1,
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
async fetch() {
   await this.$axios.get("http://localhost:8000/api/reportItems").then((result) => {

    console.log(result.data);

  }).catch((err) => {
console.log(err);
  });

},
  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
  },
  computed: {
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
