
let storage = window.localStorage
const templateList = {
  state: {
    templateList: []
  },
  getters: {
    templateList: state => state.templateList,
  },
  mutations: {
    SET_TEMPLATE_LIST(state, list){
      storage.setItem('templateList', JSON.stringify(list))
      state.templateList = list
    },
    DEL_TEMPLATE_LIST(state, list){
      storage.removeItem('templateList')
      state.templateList = []
    }
  },
  actions: {
    set_template_list({commit}, list) {
			commit('SET_TEMPLATE_LIST', list)
    },
    del_template_list({commit}) {
			commit('DEL_TEMPLATE_LIST')
		},
  }
};
export default templateList