import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/theme'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    theme
  },
  getters
})

export default store
