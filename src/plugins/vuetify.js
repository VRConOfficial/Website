import Vue from 'vue';
import Vuetify from 'vuetify/lib'; 
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
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
        anchor: '#FF6699'
      },
      dark: {
        primary: '#113C77',
        secondary: '#8E74B3',
        accent: '#C465A7',
        error: '#F44336',
        warning: '#FF9800',
        info: '#113C77',
        success: '#113C77',
        anchor: '#C465A7'
      }
    }
  }
});
