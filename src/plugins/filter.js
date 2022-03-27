import Vue from "vue";
Vue.filter(
  "formatDate",
  value => {
    const date = new Date(value);
    return date.toLocaleString(["en-US"], {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  },
  Vue.filter("loop", function(v) {
    return v
      .split("")
      .reverse()
      .join("");
  })
);
