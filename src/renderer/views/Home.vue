<template>
  <v-container >
    <v-layout row wrap>
      <v-flex xs2>
        <v-text-field
          v-model="input"
          label="enter an item"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn @click.prevent="addItem" color="success">addItem</v-btn>
        <v-btn @click.prevent="getAll" color="success">getAll</v-btn>
        <v-btn @click.prevent="insertSingle" color="success">insertSingle</v-btn>
      </v-flex>
      <v-flex xs6>
        <ul>
          <li v-for="(item, i) in items" :key="i">{{item}}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

  export default {
    components: {
    },
    data() {return {
      input: '',
      items: []
    }},
    methods: {
      addItem() {
        // send item to main process
        this.$ipc.send('item:add', this.input)
      },
      getAll() {
        this.$ipc.send('snippet:getAll')
      },
      insertSingle() {
        this.$ipc.send('snippet:insertSingle', {})
      }
    },
    mounted() {
      this.$ipc.on('item:added', (e, item) => {
        console.log('got new item from backend: ', item)
        this.items.push(item)
      })
    }
  }
</script>
