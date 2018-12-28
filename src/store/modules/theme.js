import Cookies from 'js-cookie'

const themes = {
	state: {
		theme: {
			backgroundColor: Cookies.get('backgroundColor') ? Cookies.get('backgroundColor') : '' || '#16AAD8',
			textColor: Cookies.get('textColor') ? Cookies.get('textColor') : '' || '#fff' ,
			activeTextColor: Cookies.get('activeTextColor') ? Cookies.get('activeTextColor') : '' || '#ffd04b',
			breadcrumbColor: Cookies.get('breadcrumbColor') ? Cookies.get('breadcrumbColor') : '' || 'linear-gradient(to right, #16AAD8, #16AAB8)',
			headerTheme: Cookies.get('headerTheme') ? Cookies.get('headerTheme') : '' || 'linear-gradient(to right, #16AAB8, #16AAD8)',
		},
		isDriver: Cookies.get('isDriver') ? Cookies.get('isDriver') : false || false
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
		}
	},
	actions: {
		set_theme({commit}, themes) {
			commit('SET_THEME', themes)
		},
		set_isdriver({commit}, isDriver) {
			commit('SET_ISDRIVER', isDriver)
			
		}
 	}
}

export default themes