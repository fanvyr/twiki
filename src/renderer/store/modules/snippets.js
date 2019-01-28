/* eslint-disable */

import { ipcRenderer as ipc } from 'electron'

function buildTagList(state) {
  console.time('rebuild-tag-list')

  let tagList = []
  state.snippets.map(snippet => { return snippet.tags }).forEach(snippetTags => {
    snippetTags.forEach(tag => {
      // tagList.filter(tagItem => { tagItem.tag === tag })[0] !== undefined ? 
      let index = tagList.findIndex(item => item.tag === tag)
      index !== -1 ? tagList[index].count++ : tagList.push({tag, count: 1})
    })
  })
  state.tagList = tagList


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