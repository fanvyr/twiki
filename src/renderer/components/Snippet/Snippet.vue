<template>
<div>

  <div v-html="compiledMarkdown" class="textarea">
  </div>
    <!-- <v-btn @click="requestNew" color="success">load</v-btn> -->
</div>
</template>

<script>
import marked from "marked";
import { ipcRenderer as ipc } from "electron";

export default {
  props: {},
  data() {
    return {
      snippet: undefined
    };
  },
  methods: {
    requestNew() {
      ipc.send('snippet:insertSingle')
    }
  },
  computed: {
    compiledMarkdown() {
      return this.snippet !== undefined
        ? marked(this.snippet.body, { sanitize: true })
        : false;
    }
  },
  created() {
    ipc.on("snippet:SingleSelected", (e, payload) => {
      this.snippet = payload
    });
  },
  destroyed() {
    ipc.removeAllListeners()
  }
};
</script>

<style scoped>
</style>
