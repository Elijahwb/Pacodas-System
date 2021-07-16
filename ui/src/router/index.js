import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Whatwedo from '../views/Whatwedo.vue'
import Services from '../views/Services.vue'
import Events from '../views/Events.vue'
import Contactus from '../views/Contactus.vue'
import Donate from '../views/Donate.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/what-we-do',
        name: 'what we do',
        component: Whatwedo
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },
    {
        path: '/about-us',
        name: 'about us',
        component: Services
    },
    {
        path: '/contact-us',
        name: 'contact us',
        component: Contactus
    },
    {
        path: '/donate',
        name: 'donate',
        component: Donate
    },
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
  })
  
  export default router