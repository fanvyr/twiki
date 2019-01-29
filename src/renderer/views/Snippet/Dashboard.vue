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
        <v-flex xs12>
          <p>asdf</p>
        </v-flex>
        <v-flex xs12>
          <p>asdf</p>
        </v-flex>
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

export default {
  // component: list of most used tags
  // component: list of snippets, filtered via search field
  components: {
    TagListView,
    SnippetListView,
    Snippet
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

