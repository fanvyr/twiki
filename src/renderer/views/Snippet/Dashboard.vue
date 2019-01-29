<template>
  <!-- <v-container fluid>
    <v-layout row wrap >
      <v-flex xs12 sm5>
        <v-text-field label="Search"></v-text-field>
      </v-flex>
      <v-flex xs12 sm4>
        <v-btn @click="addItem" color="success">Add Snippet</v-btn>
      </v-flex>
    </v-layout>
    
  </v-container>-->
  <v-container fluid fill-height>
    <v-layout column fill-height>
      <v-layout row wrap pl-2 pr-2>

        <!-- 1. row: tag autocomplete -->
        <v-flex xs12 align-self-center>
          <v-layout row wrap>
            <v-flex xs8>
              <tag-search/>
            </v-flex>
            <v-flex xs4>
              <v-btn @click="addItem" transparent color="success">Add Snippet</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- 2. row: presets -->
        <v-flex xs12></v-flex>
      </v-layout>
      <v-layout row fill-height wrap>
        <v-flex xs3 md2 align-end ref="heightRefFlex" pl-1>
          <tag-list-view :height="elementHeight"/>
        </v-flex>
        <v-flex xs3 md2 align-end pl-1>
          <snippet-list-view :height="elementHeight" @snippetSelected="loadSingleSnippet"/>
        </v-flex>
        <v-flex xs6 md8 align-end pl-1>
          <snippet :height="elementHeight" :snippet="snippet"/>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
// template
// v-container fill height
// vlayout
import TagListView from "../../components/Snippet/TagListView";
import SnippetListView from "../../components/Snippet/SnippetListView";
import Snippet from "../../components/Snippet/Snippet";
import TagSearch from "../../components/Snippet/TagSearch";

export default {
  // component: list of most used tags
  // component: list of snippets, filtered via search field
  components: {
    TagListView,
    SnippetListView,
    Snippet,
    TagSearch
  },
  data() {
    return {
      elementHeight: 0,
      snippet: { title: "test", body: "# ich bin n title" }
    };
  },
  methods: {
    addItem() {
      console.log("addItem clicked");

      this.$store.dispatch('snippets/addSnippet', {
        title: 'some titel',
        description: 'how to implement a cool video',
        body: '# im a header  ## im something else',
        tags: ['tag6', 'tag2', 'tag4']
      })
    },
    handleResize() {
      this.elementHeight = this.$refs.heightRefFlex.clientHeight;
    },
    loadSingleSnippet(_id) {
      console.log("requesting snippet: ", _id);
    }
  },
  computed: {
    selectedSnippet() {}
  },
  mounted() {
    console.log("elementHeight: ", this.handleResize());
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

