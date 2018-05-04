// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index';

//Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

//VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

//font
import '../src/assets/style/themes/dark.css'

//moment
import moment from 'moment/moment'

//video
import VueVideoPlayer from 'vue-video-player'
// require videojs style
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

//js-Cookie
import * as Cookies from "js-cookie";

//websdk
import websdk from 'easemob-websdk'
let webIM = window.WebIM = websdk
Vue.prototype.$WebIM = webIM
const imConn = new webIM.connection({
	isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
	https: typeof WebIM.config.https === 'boolean' ? WebIM.config.https : location.protocol === 'https:',
	url: WebIM.config.xmppURL,
	heartBeatWait: WebIM.config.heartBeatWait,
	autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
	autoReconnectInterval: WebIM.config.autoReconnectInterval,
	apiUrl: WebIM.config.apiURL,
	isAutoLogin: true
})
Vue.prototype.$imConn = imConn

Vue.config.productionTip = false

//use custom
Vue.use(Vuetify)
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)

Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    return moment(value).format(formatString); // value可以是普通日期 20170723
    // return moment.unix(value).format(formatString); // 这是时间戳转时间
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
