/* eslint-disable */

import { ipcRenderer as ipc } from 'electron'

function buildTagList(state) {
  console.time('rebuild-tag-list')

  let tagList = []


  state.snippets.map(snippet => { return snippet.tags }).forEach(snippetTags => {
    snippetTags.forEach(tag => {
      let item = tagList.find(item => item.tag === tag)
      item !== undefined ? item.count ++ : tagList.push({tag, count: 1})
    })
  })
  
  state.tagList = tagList.sort((a, b) => b.count - a.count);


  console.timeEnd('rebuild-tag-list') 
}


export default {
  namespaced: true,

  state: {
    snippets: [],
    tagList: [],
    selectedSnippet: {}
  },

  mutations: {
    setSnippets(state, payload) {

      state.snippets = payload

      buildTagList(state)
    },
    updateSingle(state, payload) {
      // update matching item in stateSnippetsList and send ipc call to backend

      // re-building the tag list
      buildTagList(state)

    },
    

  },

  actions: {
    // addItem from Controller
    setAllSnippets({ commit }, payload) {
      commit('setSnippets', payload)
    },
    loadSingleSnippet({commit}, payload) {
      
    },
    addSnippet({commit}, payload) {
      ipc.send('snippet:insertSingle', payload)
    }

  },

  getters: {
    tagList(state) {
      return state.tagList
    },
    getAll(state) {
      return state.snippets
    }
  }
}