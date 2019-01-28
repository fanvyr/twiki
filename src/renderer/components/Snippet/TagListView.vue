

<template>
  <v-list
    two-line
    subheader
    class="vList"
    :style="{height: height + 'px', minHeight: height + 'px'}"
  >
    <v-subheader outset>Mostly used Tags</v-subheader>
    <v-list-tile @click="" v-for="(tag, i) in tagList" :key="i" ripple>
      <v-list-tile-content>
        <v-list-tile-title>{{tag.tag}}</v-list-tile-title>
        <v-list-tile-sub-title>
          <b>{{tag.count}}</b> Snippets
        </v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'

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
  methods: {},
  computed: {
    // tag list
    tagList() {
      return this.$store.getters["snippets/tagList"];
    },
    vListClass() {
      return this.$store.getters["app/getWindowHeight"];
    }
  }
};
</script>

<style scoped>
.vList {
  overflow-y: scroll;
}
</style>
