
<template>
  <v-list
    three-line
    subheader
    class="vList"
    :style="{height: height + 'px', minHeight: height + 'px'}"
  >
    <v-subheader outset>Snippets</v-subheader>
    <v-list-tile @click="sendSelectedSnippet(snippet._id)" v-for="(snippet, i) in snippetList" :key="i" ripple>
      <v-list-tile-content>
        <v-list-tile-title>{{snippet.title}}</v-list-tile-title>
        <v-list-tile-sub-title v-html="snippet.description"/>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {ipcRenderer as ipc} from 'electron'

export default {
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
  components: {
    // VuePerfectScrollbar
  },
  data() {
    return {
      distanceToBottomFromVList: 250
    };
  },
  methods: {
    sendSelectedSnippet(_id) {
      this.$emit('snippetSelected', _id)
      ipc.send('snippet:loadSingle', _id)
    }
  },
  computed: {
    // tag list
    snippetList() {
      return this.$store.getters["snippets/getAll"];
    },
  }
};
</script>

<style scoped>
.vList {
  overflow-y: scroll;
}
</style>
