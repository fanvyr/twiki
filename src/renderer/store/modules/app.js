/* eslint-disable */

import { ipcRenderer as ipc } from 'electron'

export default {
  namespaced: true,

  state: {
    windowHeight: 0,
  },

  mutations: {
    setWindowHeight(state, payload) {
      state.windowHeight = payload
    },
  },

  actions: {
    setWindowHeight({commit}, payload) {
      commit('setWindowHeight', payload)
    }
  },

  getters: {
    getWindowHeight(state) {
      return state.windowHeight
    }
  }
}