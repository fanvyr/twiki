<template>
  <v-flex xs12>
    <v-autocomplete
      label="Filter to tags"
      :items="tagList"
      v-model="searchInput"
      multiple
      chips
      item-text="tag"
      item-value="tag"
    >
      <template slot="selection" slot-scope="data">
        <v-chip
          close
          :selected="data.selected"
          @input="remove(data.item)"
          class="chip--select-multi"
        >{{data.item.tag}}</v-chip>
      </template>

      <template slot="item" slot-scope="data">
        <v-list-tile-content>
          <v-list-tile-title v-html="data.item.tag"></v-list-tile-title>
          <v-list-tile-sub-title><b>{{data.item.count}}</b> appearances</v-list-tile-sub-title>
        </v-list-tile-content>
      </template>
    </v-autocomplete>
    <p>selected: {{searchInput}}</p>
  </v-flex>
</template>

<script>
// presets including (prop)
// auto
// emit tag added event
// getter: tags

export default {
  data() {
    return {
      searchInput: [],
    };
  },
  methods: {
    remove(item) {}
  },
  computed: {
    tagList() {
      return this.$store.getters["snippets/tagList"]
    },
    availableTags() {
      return this.tagList.filter(availTag => {
        return this.searchInput.some(input => {
          return input === availTag.tag
        }) ? false : true

      }).sort((a, b) => { 
        console.log(a, b)
        a.count > b.count ? 1 : b.count > a.count ? -1 : 0
        });
    }
  }
};
</script>
