<template lang="pug">
v-dialog(v-model="clickHandler", fullscreen="", hide-overlay="")
  v-card(tile="")
    v-toolbar(dark, color="#012e48", height="100px", background-color="red")
      v-btn(icon="", @click="clickHandler")
        v-icon mdi-close
      v-toolbar-title.text-h4
        | التقارير
      v-spacer
      .con
        v-tabs(v-model="tab", centered, grow, dark, background-color="#2c3e50")
          v-tabs-slider(color="#e55039")
          v-tab.text-h4.tabs-style(v-for="item in items2")
            | {{ item }}
            v-icon(x-large="")
    v-tabs-items(v-model="tab")
      v-tab-item
        v-card-title.text-h3
          | المبيعات
        v-text-field(
          v-model="searchDesserts",
          append-icon="mdi-magnify",
          label="Search",
          single-line,
          hide-details
        )
        v-data-table.elevation-1.text-h2.report-info(
          :headers="headers",
          :items="desserts",
          :search="searchDesserts",
          item-key="desserts",
          sort-by="createdAt",
          group-by="created_on",
          dense,
          dark
        )
          template(v-slot:item.actions="{ item }")
            v-icon.mr-2(small="", @click="editItem(item)")
              | mdi-pencil
            v-icon(small="", @click="deleteItem(item, item.id)")
              | mdi-delete
          template(v-slot:body.append)
            tr
              td(colspan="3")
              td.total-of-report(colspan="3", v-if="loggedInUser.name") {{ totalReport }} JD

      v-tab-item
        v-card(flat="")
          v-card-title.text-h3
            | المصاريف
          v-card-text
            v-text-field(
              v-model="searchexpenses",
              append-icon="mdi-magnify",
              label="Search",
              single-line,
              hide-details
            )
            v-data-table.elevation-1.text-h2.report-info(
              :headers="expensesheaders",
              :items="expenses",
              :search="searchexpenses",
              :items-per-page="10",
              item-key="expenses",
              sort-by="createdAt",
              group-by="createdAt",
              dark
            )
              template(v-slot:body.append)
                tr
                  td
                  td.total-of-report(colspan="1") {{ totalExpenses }} JD

      v-tab-item
        v-card(flat="")
          v-card-title.text-h3
            | المشتريات
          v-card-text
            v-text-field(
              v-model="searchexpenses",
              append-icon="mdi-magnify",
              label="Search",
              single-line,
              hide-details
            )
            v-data-table.elevation-1.text-h2.report-info(
              :headers="purchaseheaders",
              :items="purchase",
              :search="searchexpenses",
              :items-per-page="10",
              item-key="purchase",
              sort-by="createdAt",
              group-by="createdAt",
              dark
            )
              template(v-slot:body.append)
                tr
                  td
                  td.total-of-report(colspan="1") {{ totalPurchase }} JD
      v-tab-item
        v-card(flat="")
          v-card-title.text-h3
            | اجمالي الكاش
          v-card-text
          template
            v-expansion-panels(dark, focusable, multiple, tile)
              v-expansion-panel(v-for="(item, i) in purchase", :key="i")
                v-expansion-panel-header
                  | {{ item.createdAt }}
                v-row
                  v-col(cols="11")
                    v-expansion-panel-content.text-h5
                      | صافي الارباح {{ item.value }}
                  v-col
                    v-expansion-panel-content
                      v-icon.mr-2(small="", @click="editItem(item)")
                        | mdi-pencil

  v-row(justify="center")
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["dialogReport"],
  data() {
    return {
      time3: "",
      time2: Date,
      panel: [],
      tab: null,
      expenses: [],
      purchase: [],
      totalPurchase: 0,
      totalExpenses: 0,
      totalReport: 0,
      searchDesserts: "",
      searchexpenses: "",
      items2: ["المبيعات", "المصاريف", "المشتريات", "اجمالي الكاش "],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      value: 1,
      purchaseheaders: [
        { text: "description", value: "description" },
        { text: "Value", value: "value" },
        { text: "Casher Name", value: "casherName" },
        { text: "Wheigt", value: "wheigt" },
        { text: "Created At", value: "createdAt" },
      ],
      expensesheaders: [
        { text: "description", value: "description" },
        { text: "Value", value: "value" },
        { text: "Casher Name", value: "casherName" },
        { text: "Created At", value: "createdAt" },
      ],
      headers: [
        {
          text: "All Items",
          align: "start",
          value: "allIetms",
        },
        { text: "Total Account", value: "totalAccount" },
        { text: "Tax", value: "tax" },
        { text: "Sumation", value: "sumation" },
        // { text: "Descraption", value: "discraption" },
        { text: "Casher Name", value: "casherName" },
        { text: "time", value: "time" },
        { text: "created_on", value: "created_on" },

        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
    };
  },
  async fetch() {
    await this.$axios
      .get(
        "http://localhost:8000/api/reportItems/displaypublished/" +
          this.loggedInUser.name
      )
      .then((result) => {
        this.desserts = result.data;

        this.desserts.forEach((element) => {
          this.totalReport += element.sumation;
          this.time3 = element.createdAt;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    await this.$axios
      .get(
        "http://localhost:8000/api/expenses/published/" + this.loggedInUser.name
      )
      .then((result) => {
        this.expenses = result.data;
        this.expenses.forEach((element) => {
          this.totalExpenses += element.value;
          element.createdAt = this.$moment(element.createdAt).format(
            "DD/MM/YYYY"
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
    await this.$axios
      .get(
        "http://localhost:8000/api/purchase/published/" + this.loggedInUser.name
      )
      .then((result) => {
        this.purchase = result.data;
        this.purchase.forEach((element) => {
          element.createdAt = this.$moment(element.createdAt).format(
            "DD/MM/YYYY  --- hh:mm:ss a"
          );
          this.totalPurchase += element.value;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    deleteItem(item, id) {
      console.log(id);
      this.$axios
        .get("http://localhost:8000/api/reportItems/undisplaypublished/" + id)
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
  },
};
</script>
<style  scoped>
@font-face {
  font-family: "GE-Hili";
  src: url("../assets/fonts/GE-Hili-Light_15.otf");
}
.total-of-purchase {
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 324px;
  font-size: 25px;
}
.total-of-report {
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 546px;
  font-size: 25px !important;
}
.total-of-expenses {
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 397px;
  font-size: 25px;
}
.report-info {
  font-weight: bold;
}
.tabs-style {
  font-family: "GE-Hili" !important;
}

.con {
  color: rgb(5, 27, 27);
  font-family: "GE-Hili";
  width: 40%;
  margin-right: 30%;
}
</style>
