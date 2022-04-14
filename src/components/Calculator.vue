<template>

  <div id="page">


    <div id="calc">
      <div id="input" class="text-center p-7">{{ current }}</div>
      <h1>الرجاء ادخال القيمة</h1>
      <div class="buttons">


        <button @click="buttonClick(1)">1</button>
        <button @click="buttonClick(2)">2</button>
        <button @click="buttonClick(3)">3</button>

        <button @click="buttonClick(4)">4</button>
        <button @click="buttonClick(5)">5</button>
        <button @click="buttonClick(6)">6</button>

        <button @click="buttonClick(7)">7</button>
        <button @click="buttonClick(8)">8</button>
        <button @click="buttonClick(9)">9</button>

        <!-- <button id="comma" @click="comma">.</button> -->
        <button id="0" @click="buttonClick(0)">0</button>
        <button @click="clear">C</button>
        <button id="equals" @click="equals()">Enter</button>
      </div>
    </div>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      v-model="dialog5"
      class="text-center"
    >
      <template v-slot:default="dialog2" rounded>
        <v-card class="text-center">
          <v-toolbar color="#dfe6e9" class="text-h2 title" v-GE-Hili-font
            >الباقي</v-toolbar
          >
          <v-card-text>
            <div class="text-h2 pa-12">{{ current }}</div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="confarim">تاكيد</v-btn>
            <v-btn @click="dialog2.value = false">الغاء</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["price", "rowData", "dialogInvoice", "allIetms" ,"additions",],
  data() {
    return {
      vv: [],
      dialog5: false,
      dialog2: false,
      current: "",
      previous: "",
      operator: "",
      firstValue: "",
      secondValue: "",
      history: [],
      tax: 0.16,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },

    confarim() {
      this.$axios
        .post("http://localhost:8000/api/reportItems/", {
          allIetms: this.allIetms,
          sumation: this.price + this.price * this.tax,
          totalAccount:this.price,
          tax:this.price *this.tax,
          casherName:this.loggedInUser.name,
        })
        .then(function (response) {
          this.allIetms = [];
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(this.rowData);
      this.current = "";
      this.clickHandler();
    },
    cansele() {
      this.current = "";
    },
    buttonClick(value) {
      this.current = this.current + "" + value;
      new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
      ).play();
    },

    clear() {
      this.current = "";
    },

    equals() {
      this.current =
        Number.parseFloat(this.current).toFixed(2) -
        (parseFloat(this.price) +
          parseFloat(this.price) * parseFloat(this.tax));
      this.dialog5 = true;
      console.log("......................................");
      console.log(this.allIetms);
      console.clear();
    },
    operatorSelection(operator) {
      this.operator = operator;
      this.firstValue = this.current;
      this.current = "";
    },
    deleteButton() {
      this.current = this.current.toString().slice(0, -1);
    },
    previousButton() {
      this.current = this.previous;
    },
    comma() {
      if (!this.current.includes(".")) {
        this.current = this.current + ".";
      }
    },
    clearButton() {
      this.history = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#calc {
  width: 100%;
  max-height: 600px;
  padding-right: 0;
}
#page {
  border: 2px;
  max-width: 900px;
}

.buttons {
  display: grid;
  alignment: right;
  direction: rtl;
}

button {
  box-shadow: 0 1px 0 0 #1c1b18;
  background: #eae0c2 linear-gradient(to bottom, #ecf0f1 5%, #2980b9 100%);
  border-radius: 15px;
  border: 2px solid #333029;
  display: inline-block;
  cursor: pointer;

  color: #505739;
  font-family: Arial, serif;
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px;
  text-decoration: none;
  text-shadow: 0 1px 0 #c50c0c;
  margin: 2px;
}

button:hover {
  background: #886914 linear-gradient(to bottom, #ccc2a6 5%, #eae0c2 100%);
  transform: scale(1.05);
}
button:active {
  box-shadow: 0 4px 8px;
  transform: scale(0.98);
}

h1 {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  color: #1186d4;
  padding: 12px 16px;
  text-shadow: 0 1px 0 #313030;
}

#input {
  width: 100%;
  height: 80px;
  background-color: #ecf0f1;
  margin: 3px;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid #333029;
  font-size: 190%;
  color: #000000;
  font-weight: bold;
}

#list {
  list-style-type: none;
  padding: 0;
}

#clearBtn {
  margin: 10px;
  padding: 10px;
}

#equals {
  grid-column: 1 / span 3;
  background: #fcfbf9 linear-gradient(to bottom, #f8f7f2 5%, #af9444 100%);
}
.title {
  padding-left: 220px;
  font-family: "GE-Hili" !important;
  font-weight: bold;
}
</style>
