import Cookies from 'js-cookie'

const themes = {
	state: {
		theme: {
			backgroundColor: Cookies.get('backgroundColor') ? Cookies.get('backgroundColor') : '' || '#333940',
			textColor: Cookies.get('textColor') ? Cookies.get('textColor') : '' || '#E0E0E0' ,
			activeTextColor: Cookies.get('activeTextColor') ? Cookies.get('activeTextColor') : '' || '#ffd04b',
			breadcrumbColor: Cookies.get('breadcrumbColor') ? Cookies.get('breadcrumbColor') : '' || 'linear-gradient(to right, #333, #333940)',
			headerTheme: Cookies.get('headerTheme') ? Cookies.get('headerTheme') : '' || 'linear-gradient(to right, #333940, #333)',
		},
		isDriver: Cookies.get('isDriver') ? Cookies.get('isDriver') : false || false,
    formdata: sessionStorage.getItem('formdata') ? sessionStorage.getItem('formdata') : '1111' || '111',
	},
	mutations: {
		SET_THEME: (state, themes) => {
			Cookies.set('backgroundColor', themes.backgroundColor, { expires: 100 })			
			Cookies.set('textColor', themes.textColor, { expires: 100 })			
			Cookies.set('activeTextColor', themes.activeTextColor, { expires: 100 })			
			Cookies.set('breadcrumbColor', themes.breadcrumbColor, { expires: 100 })			
			Cookies.set('headerTheme', themes.headerTheme, { expires: 100 })			
			state.theme = themes
		},
		SET_ISDRIVER: (state, isDriver) => {
			Cookies.set('isDriver',isDriver, { expires: 100 })
			state.isDriver = isDriver
		},
    SET_FORMDATA: (state, formData) => {
      sessionStorage.setItem('formdata',formData);
      state.formdata = formData
    }
	},
	actions: {
		set_theme({commit}, themes) {
			commit('SET_THEME', themes)
		},
		set_isdriver({commit}, isDriver) {
			commit('SET_ISDRIVER', isDriver)
		},
    set_formData({commit}, formData) {
      commit('SET_FORMDATA', formData)
    }
 	}
}

export default themes
