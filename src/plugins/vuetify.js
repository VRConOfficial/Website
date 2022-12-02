
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdiSvg',
		iconFont: ''
	},

	theme: {
		themes: {
			light: {
				primary: '#FF3399',
				secondary: '#FF6699',
				accent: '#FFCC33',
				error: '#F44336',
				warning: '#FF9800',
				info: '#113C77',
				success: '#113C77',
				anchor: '#fff',
				main: '#AB47BC',
				// background: '#484853'
				background: 'rgba(70, 70, 82, 0.1)'
			},
			dark: {
				primary: '#FFCC33',
				secondary: '#8E74B3',
				accent: '#C465A7',
				error: '#F44336',
				warning: '#FF9800',
				info: '#113C77',
				success: '#113C77',
				anchor: '#fff',
				main: '#AB47BC'
			}
		}
	}
});
