import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faMobile, faPaperPlane, faEnvelope, faMapMarkerAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faMobile, faPaperPlane, faEnvelope, faMapMarkerAlt, faAddressCard)
library.add(faFontAwesome, faFacebook, faWhatsapp, faInstagram, faTwitter)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
