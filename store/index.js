import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      siteInfo: [],
      aboutPage: [],
      workPage: [],
      connect: []
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteInfo')
        await dispatch('getAboutPage')
        await dispatch('getWorkPage')
      },
      getSiteInfo({ state, commit }) {
        const info = require('~/content/general/info.json')
        const connect = require('~/content/general/connect.json')

        commit('SET_INFO', info)
        commit('SET_CONNECT', connect)
      },
      getAboutPage({ state, commit }) {
        const about = require('~/content/about.json')

        commit('SET_ABOUT', about)
      },
      getWorkPage({ state, commit }) {
        const work = require('~/content/work.json')

        commit('SET_WORK', work)
      }
    },
    mutations: {
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },
      SET_ABOUT(state, data) {
        state.aboutPage = data
      },
      SET_WORK(state, data) {
        state.workPage = data
      }
    }
  })

export default createStore
