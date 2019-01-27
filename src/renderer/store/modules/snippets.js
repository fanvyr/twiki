import {ipcRenderer as ipc} from 'electron'

export default {
  namespaced: true,

  state: {
    snippets: [],

  },

  mutations: {
    setSnippets(state, payload) {
      state.snippets = payload
    },
    updateSingle(state, payload) {
      // update matching item in stateSnippetsList and send ipc call to backend
      
      
    },

  },

  actions: {
    // addItem from Controller
    setAllSnippets({commit}, payload) {
      commit('setSnippets', payload)
    }

  },

  getters: {

  }
  
}