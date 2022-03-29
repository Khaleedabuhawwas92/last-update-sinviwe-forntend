<template lang="pug">
v-dialog(
  v-model="clickHandler",
  fullscreen="",
  hide-overlay="",
  transition="dialog-bottom-transition"
)
  v-card
    v-toolbar(dark="", color="#012e48")
      v-btn(icon="", dark="", @click="clickHandler")
        v-icon mdi-close
      v-toolbar-title {{loggedInUser.name}}
      v-spacer
      v-toolbar-items
        v-btn(dark="", text="", @click="clickHandler")
          | Save
    v-list(three-line="", subheader="")
      v-subheader User Controls
      v-list-item
        v-list-item-content
          v-list-item-title Content filtering
          v-list-item-subtitle Set the content filtering level to restrict apps that can be downloaded
      v-list-item
        v-list-item-content
          v-list-item-title Password
          v-list-item-subtitle Require password for purchase or use password to restrict purchase
    v-divider
    v-list(three-line="", subheader="")
      v-subheader General
      v-list-item
        v-list-item-action
          v-checkbox(v-model="notifications")
        v-list-item-content
          v-list-item-title Notifications
          v-list-item-subtitle Notify me about updates to apps or games that I downloaded
      v-list-item
        v-list-item-action
          v-checkbox(v-model="sound")
        v-list-item-content
          v-list-item-title Sound
          v-list-item-subtitle Auto-update apps at any time. Data charges may apply
      v-list-item
        v-list-item-action
          v-checkbox(v-model="widgets")
        v-list-item-content
          v-list-item-title Auto-add widgets
          v-list-item-subtitle Automatically add home screen widgets
</template>
<script>
import {  mapGetters } from "vuex";
export default {
  props: ["dialogUser"],
  computed:{
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    clickHandler(e) {
      this.$emit("toggle");
    },
  },
};
</script>
