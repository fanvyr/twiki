<template>
  <v-app>
    <v-navigation-drawer temporary class="grey lighten-4" v-model="sidebar" app></v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-side-icon @click="sidebar = !sidebar"/>

      <v-toolbar-title class="headline text-uppercase">xxxx</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import "./plugins/SnippetController.js";
import "./plugins/Startup.js";
import { setTimeout } from "timers";

export default {
  components: {},
  name: "App",
  data() {
    return {
      sidebar: false,
      windowHeigth: 0,
      isCountingForResizeHandle: false
    };
  },
  methods: {
  },
  created() {},
  mounted() {
  },
  destroyed() {
  }
};
</script>

<style>
.html {
  overflow: hidden;
}
</style>
