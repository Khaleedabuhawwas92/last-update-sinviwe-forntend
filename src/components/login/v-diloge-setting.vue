<template lang="pug">
<div>
  v-dialog(
    v-model="dialog",
    fullscreen="",
    hide-overlay="",
    transition="dialog-bottom-transition",
    scrollable=""
  )
    v-card(tile="")
      v-toolbar(flat="", dark="", color="#012e48")
        v-btn(icon="", dark="", @click="dialog = false")
          v-icon mdi-close
        v-toolbar-title Settings
        v-spacer
        v-toolbar-items
          v-btn(dark="", text="", @click="dialog = false")
            | Save
        v-menu(bottom="", right="", offset-y="")
          template(v-slot:activator="{ on, attrs }")
            v-btn(dark="", icon="", v-bind="attrs", v-on="on")
              v-icon mdi-dots-vertical
          v-list
            v-list-item(
              v-for="(item, i) in items",
              :key="i",
              @click="() => {}"
            )
              v-list-item-title {{ item.title }}
      v-card-text
        v-btn.ma-2(color="primary", dark="", @click="dialog2 = !dialog2")
          | Open Dialog 2
        v-tooltip(right="")
          template(v-slot:activator="{ on, attrs }")
            v-btn.ma-2(v-bind="attrs", v-on="on")
              | Tool Tip Activator
          |
          | Tool Tip
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
      div(style="flex: 1 1 auto")
</div>
</template>
<script>
export default {
  props: {
    dialog: Boolean,
  },
};
</script>
