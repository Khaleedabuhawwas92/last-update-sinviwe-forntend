<template lang="pug">
.homePage
  <navigationBar  :items="items" @toggle ="halooo" :price="price" />
  <alertSuccess massege="تمت العملية بنجاح"  @toggle="showSuccessAlert" v-if="success"/>
  v-tabs.commint(
    background-color="#e74c3c",
    dark,
    v-if="this.tables.length !== 0",
    ,
    v-GE-Hili-font
  )
    v-tab.text-h4.px-2.commint2(@click="return1(0)") طلب معلق 1

  v-alert.alert-notfations(
    :value="alert1",
    color="red",
    dark,
    border="top",
    transition="scale-transition"
  )
    | لا يوجد طالبات للتعليق
  v-chip.alert-notfations1(color="green", v-if="loggedInUser.isAdmain")
    | {{ loggedInUser.name }}
  v-alert.alert-notfations(
    :value="alert2",
    color="black",
    dark,
    border="top",
    transition="scale-transition"
  )
    | هناك طلب معلق
  .all-contint
    .sidbar
      .sidbar-contant
        .image
          img(src="../../assets/images/logo.png", width="300")
        .card3
          v-btn-toggle.toggle(
            mandatory,
            v-model="toggle_one",
            borderless,
            color="red"
          )
            v-btn.text-h4.toggle3(x-large) ديلفري
            v-btn.text-h4.toggle3(x-large) كاش

        .icon
          v-icon(color="#fff", x-large) mdi-cart-outline
          span السلة
        .table.mx-auto
          v-row.price-hedar
            v-col(cols="4") الصنف
            v-col(cols="1") العدد
            v-col(cols="2") السعر
            v-col(cols="3") التعديل

          v-container#scroll-target.overflow-y-auto(style="height: 250px")
            v-row.list.d-flex.flex-row-reverse.text-focus-in(
              v-for="(itemRow, index) in rowData",
              :key="index"
            )
              v-col.more(v-if="value2 != 0") {{ value2 }}
              v-col.list-title(cols="4") {{ itemRow.title }}
              v-col.price(cols="1") {{ 1 }}
              v-col.price(v-model="value2", col="2") {{ itemRow.price }}
              v-col(cols="2")
                v-icon.price(
                  color="#012e48",
                  @click="removeElement(index, itemRow.price)"
                )
                  | mdi-close
                v-icon.price(
                  color="#012e48",
                  @click="editElement(index, itemRow)"
                )
                  | mdi-pencil-box
        .mr-4
          v-row.sum
            .col الضريبة
            .col.num(v-model="price") {{ this.price * this.tax }}
            .col &#x62F;.&#x627;
          v-row.sum
            .col المجموع
            .col.num(v-model="price") {{ this.price }}
            .col &#x62F;.&#x627;
          v-row.sum
            .col الحساب الاجمالي
            .col.num(v-model="price") {{ this.price + this.price * this.tax }}
            .col &#x62F;.&#x627;
        .buttons
          button.btu(@click="printInvoice") طباعة الفاتورة
          button.btu(@click="clearOrder") الغاء

  v-dialog(
    v-model="delete1",
    max-width="900",
    persistent,
    transition="dialog-top-transition"
  )
    v-card.text-center(border="left", colored-border)
      v-card-text.text-h5.titl-card
        | هل تريد حذف الطلبات
      v-icon(color="info", x-large)
        | mdi-delete

      v-card-actions
        v-spacer
        v-btn.text-h5(color="red darken-1", text="", @click="close")
          | الغاء
        v-btn.text-h5(color="green darken-1", text="", @click="removeItems")
          | موافق

  v-dialog(
    transition="dialog-bottom-transition",
    max-width="1550",
    v-model="dialogInvoice",
    persistent,
    @click="cl"
  )
    v-row.overflow.d-flex.justify-space-between.justify-end
      v-col.card2(col="12")
        v-card
          v-card-text.py-2
            v-data-table.elevation-1(
              :headers="headers",
              :items="rowData",
              hide-default-footer
            )
            v-row
              v-col.sumation(cols="6", v-model="price") {{ this.price + this.price * this.tax }}
              v-col.sumation(cols="6") المجموع
          v-divider

          v-card-actions.justify-space-between.flex-row-reverse
            .i
              v-btn.text-h5(text="", @click="colseToggle2", color="primary") اغلاق
              v-btn.text-h5(
                text="",
                color="primary",
                elevation="2",
                @click="CommentOrder(0)",
                v-if="this.tables.length == 0"
              ) تعليق الطلب
            .g.text-center.py-4.text-h5 طريقة الدفع
              .d-flex.flex-row
              v-radio-group(v-model="radioGroup2")
                v-radio.px-2(label=" كاش", color="red", value="primary")
                v-radio.px-2(label="زين كاش", color="success", value="success")
                v-radio.px-2(label="فيزا", color="info", value="info")
            .g.text-center.text-h5 خدمة الطلب
              .d-flex.flex-row
                v-radio-group(v-model="radioGroup")
                  v-radio.px-2(label="كاش", color="red", value="primary")
                  //- v-radio.px-2(label="طاولة", color="success", value="success")
      v-col.sumation1(
        col="2",
        v-model="radioGroup",
        v-if="radioGroup === 'primary'"
      )
        <Calculator :price="price"  @toggle="colseToggle" :rowData="rowData" :allIetms="allIetms" :additions="additions" />
  v-dialog(max-width="600", v-model="errorMassege")
    v-card.text-center(color="#d63031")
      v-toolbar(color="red", background="red") ERORR MASSEGE
      v-card-text.massegeErorr.text-center
        .text-h2.pa-12.ma-auto لايوجد طلبات للطباعة
    v-overlay(color="#e17055")
  v-dialog(v-model="chooese", scrollable="", max-width="300px", persistent)
    template(v-slot:activator="{ on, attrs }")
      v-btn(color="primary", dark="", v-bind="attrs", v-on="on")
        | Open Dialog
    v-card
      v-card-title اضافة
      v-divider
      v-card-text(style="height: 200px")
        v-container(fluid="")
          //- span {{ item }}

          v-select.text-h5(
            v-model="value2",
            :items="items2",
            label="Select Item",
            multiple=""
          )
            v-chip(v-if="index === 0")
            span.grey--text.text-caption(v-if="index === 1")
              | (+{{ value.length - 1 }} others)
      v-divider
      v-card-actions
        v-btn(color="blue darken-1", text="", @click="chooese = false")
          | Close
        v-btn(color="blue darken-1", text="", @click="chooese = false")
          | Save
</template>
<script >
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  props: ["current"],
  data() {
    return {
      success: false,
      allIetms: [],
      items2: [],
      value2: [],
      chooese: false,
      errorMassege: false,
      toggle_one: 1,
      alert1: false,
      alert2: false,
      wolocom: true,
      tax: 0.16,
      queryJson: "{}",
      dialogInvoice: false,
      sum: 0,
      title: "",
      additions: [],
      date: "",
      price: 0,
      adress: "",
      company: "",
      delete1: false,
      fliers: "",
      rowData: [], //the declared array,
      tab: null,
      radioGroup: "primary",
      radioGroup2: "primary",
      date: new Date(),
      items: [],
      tables: [],
      swaping: [],
      items1: {},
      headers: [
        {
          text: "الطلب",
          align: "start",
          value: "title",
        },
        { text: "السعر", value: "price" },
        { text: "الوصف", value: "sum" },
      ],
      state: {
        connection: null,
        databases: [],
        databaseName: "",
        collections: [],
        records: [],
        collectionName: "",
        totalNumberOfResults: null,
      },
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },

  async fetch() {
    await this.$axios.get("http://localhost:8000/api/items").then((result) => {
      this.items = result.data;
    });
  },

  methods: {
    colseToggle() {
      this.dialogInvoice = false;
      this.removeItems();
      this.current = 0;
      this.showSuccessAlert();
    },
    colseToggle2() {
      this.dialogInvoice = false;
      this.current = "";
    },

    restartAllValues() {
      this.rowData.splice(0);
      this.sum = 0;
      this.price = 0;
    },

    printInvoice() {
      if (this.rowData.length === 0) {
        this.errorMassege = true;
        setTimeout(() => {
          this.errorMassege = false;
        }, 2000);
      } else {
        this.dialogInvoice = true;
      }
    },
    showSuccessAlert() {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 2500);
    },

    clearOrder() {
      if (this.rowData.length === 0) {
        this.errorMassege = true;
        setTimeout(() => {
          this.errorMassege = false;
        }, 2000);
      } else {
        if (this.tables.length !== 0) {
          this.delete1 = true;
        } else {
          this.delete1 = true;
        }
      }
    },

    return1(index1) {
      // this.rowData.push( this.tables.length)
      if (this.rowData.length === 0) {
        this.tables.forEach((element, key) => {
          if (index1 === key) {
            for (const index1 in element) {
              if (Object.hasOwnProperty.call(element, key)) {
                this.rowData.push(element[index1]);
                this.price += element[index1].price;
                console.log(element[index1]);
              }
            }
          }
        });
        this.tables = [];
      } else {
        this.alert2 = true;
        setTimeout(() => {
          this.alert2 = false;
        }, 3000);
      }
    },

    CommentOrder(indexof) {
      if (!indexof) {
        if (this.rowData.length == 0) {
          this.alert1 = true;
          setTimeout(() => {
            this.alert1 = false;
          }, 4000);
        } else {
          this.tables.push(this.rowData);
        }
      } else {
        this.tables.map((elment, index) => {
          if (index === indexof) {
            console.log(elment[index]);
          }
        });
      }
      console.log("table", this.tables);
      (this.rowData = []), (this.dialogInvoice = false);
      this.price = 0;
    },

    async cl() {
      await this.$axios
        .get("http://localhost:3000/items")
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    },

    halooo(Tabindex, index) {
      if (index >= 0) {
        var my_object = new Object({
          allIetms: this.allIetms.push(
            this.items[Tabindex].product[index].title + "\n"
          ),
          discraption: this.items[Tabindex].product[index].discraption,
          additions: this.items[Tabindex].product[index].additions,
          title: this.items[Tabindex].product[index].title,
          price: Number(this.items[Tabindex].product[index].price),
          sum:  this.price +
            Number(this.items[Tabindex].product[index].price).toFixed(2),
          casher: this.loggedInUser.name,
        });
        // this.title5.push(my_object.title);
        window.scrollBy(100, 0);
        this.rowData.push(my_object);
        this.price = my_object.price + this.price;
      }
      new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
      ).play();
    },

    close: function () {
      new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
      ).play();
      this.delete1 = false;
    },

    removeElement: function (index, price) {
      this.rowData.splice(index, 1);
      this.price = this.price - price;
    },

    showItems: function () {
      alert(JSON.stringify(this.rowData, null, 4));
    },

    removeItems: function () {
      new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
      ).play();
      this.delete1 = false;
      this.allIetms.splice(0);
      this.rowData.splice(0);
      this.sum = 0;
      this.price = 0;
    },

    editElement: function (index, row) {
      this.chooese = true;

      this.rowData.forEach((element) => {
        this.items2 = element.additions;
      });
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Gideon Roman";
  src: url("../../assets/fonts/GideonRoman-Regular.ttf");
}

.homePage {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.all-contint {
  height: 100%;
}

.overflow {
  overflow: hidden;
}

.sidbar {
  background: #012e48;
  max-width: 30%;
  padding: 10px;
  text-align: center;
  height: 100%;
}

.titl-card {
  padding: 19px !important;
  text-align: center !important;
  color: #c0392b !important;
}

.sidbar-contant {
  text-align: center;
}

.toggle {
  font-size: 20px;
  font-family: "GE-Hili" !important;
  border-radius: 15px;
  margin: 30px 60px;
  padding: 5px;
  background-color: #f9f9fa !important;
}

.toggle3 {
  font-family: "GE-Hili" !important ;
}

.card3 {
  border-radius: 15px;
  background-color: #012e48;
}

.card2 {
  width: 80%;
}

.icon {
  font-size: 30px;
  color: #fff;
  font-family: "GE-Hili";
}

.sumation {
  padding-left: 250px;
  padding-top: 30px;
  font-size: 30px;
  font-weight: bold;
}

.sumation1 {
  width: 40%;
}

.table {
  margin: 30px auto;
  color: #fff;
  font-family: "GE-Hili";
  font-size: 17px;
}

.price-hedar {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  font-size: 23px;
  font-weight: bold;
}

.list {
  position: relative;
  display: flex;
  color: #000;
  justify-content: space-between;
  flex-direction: row-reverse;
  background: rgb(62, 65, 157);
  background: rgb(62, 65, 157);
  background: radial-gradient(
    circle,
    rgb(251, 251, 251) 49%,
    rgba(21, 129, 153, 0.656) 89%,
    rgba(9, 9, 121, 0) 98%
  );
  color: rgb(241, 236, 236);
  width: 100%;
  height: 25%;
  text-align: center;
  overflow: hidden;
  margin: 5px auto;
  border-radius: 30px;
  font-family: "Gideon Roman";
}
.text-focus-in {
  -webkit-animation: text-focus-in 0s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
/* ----------------------------------------------
 * Generated by Animista on 2022-4-25 23:13:38
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
/* ----------------------------------------------
 * Generated by Animista on 2022-4-25 23:21:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-out-top
 * ----------------------------------------
 */
@-webkit-keyframes bounce-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  5% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  25% {
    -webkit-transform: translateY(38px);
    transform: translateY(38px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  52% {
    -webkit-transform: translateY(75px);
    transform: translateY(75px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  70% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(800px);
    transform: translateY(800px);
    opacity: 0;
  }
}
.bounce-out-top {
  -webkit-animation: bounce-out-top 1.5s both;
  animation: bounce-out-top 1.5s both;
}
@keyframes bounce-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  5% {
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  15% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  25% {
    -webkit-transform: translateY(38px);
    transform: translateY(38px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  52% {
    -webkit-transform: translateY(75px);
    transform: translateY(75px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  70% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  85% {
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-800px);
    transform: translateY(-800px);
    opacity: 0;
  }
}

.sum {
  display: flex;
  flex-direction: row-reverse;
  color: #fff;
  font-size: 27px;
  font-family: "GE-Hili";
}

.list-title {
  width: 35%;
  overflow-wrap: break-word;
  line-height: 0.8;
  font-weight: bold;
  font-size: 20px;
  height: 30%;
  text-align: center;
  line-height: 1.5;
  color: #000;
}

.price {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: 25px;
  line-height: 1.5;
  color: #000;
}

.num {
  font-family: "Courier New", Courier, monospace;
}

.buttons {
  padding: 50px 0;
  width: 100%;
  margin: 0 auto;
  font-family: "GE-Hili";
}

.btu {
  background-color: #fff;
  padding: 10px 10px;
  margin: 3px 3px;
  border-radius: 10px;
  font-size: 27px;
}

.active {
  background-color: #012e48;
  color: #fff;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(148, 120, 120);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f0eeee;
}
.center {
  text-align: right;
}
.alert-notfations {
  position: absolute;
  width: 500px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.alert-notfations1 {
  position: absolute;

  text-align: center;
  font-size: 30px;
  font-weight: bold;
  left: 500px;
  color: #fff;
}
.commint {
  position: absolute;
  width: 190px;
  top: 130px;
  left: 190px;
}
.commint2 {
  font-family: "GE-Hili" !important;
  font-weight: bold;
}
.massegeErorr {
  color: #fff !important;
}
.more {
  position: absolute;
  background-color: #c0392b;
  color: #012e48;
  top: 50px;
  transition-duration: 500ms;
  font-weight: bold;
  font-size: 18px;
}
.more:hover {
  top: 2px;
}
</style>
