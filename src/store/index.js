import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/theme'
import layout from './modules/layout'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    theme,
    layout
  },
  getters
})

export default store
