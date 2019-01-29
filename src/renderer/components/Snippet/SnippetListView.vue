
<template>
  <v-list
    three-line
    subheader
    class="vList"
    :style="{height: height + 'px', minHeight: height + 'px'}"
  >
    <v-subheader outset>Snippets</v-subheader>
    <v-list-tile @click="sendSelectedSnippet(snippet._id)" v-for="(snippet, i) in filteredSnippetList" :key="i" ripple>
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
    },
    searchInput: {
      type: Array
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
      ipc.send('snippet:loadSingle', _id)
    }
  },
  computed: {
    // tag list
    snippetList() {
      return this.$store.getters["snippets/getAll"];
    },
    filteredSnippetList() {
      // enthält die snippet tag list all searchinputs?

      return this.snippetList.filter(snippet => {
        return this.searchInput.every(searchTag => {
          return snippet.tags.some(tagInSnippet =>  {
            return tagInSnippet === searchTag}
            )
        })
      })
    },
    test() {

    }
  }
};
</script>

<style scoped>
.vList {
  overflow-y: scroll;
}
</style>
