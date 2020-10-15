require('./bootstrap');

window.Vue = require('vue');

// import dependecies tambahan
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.use(VueRouter, VueAxios, Axios);

// import file yang dibuat tadi
import App from './components/App.vue';
import Create from './components/person/Create.vue';
import Read from './components/person/Read.vue';
import Update from './components/person/Update.vue';

// membuat router
const routes = [{
        name: 'read',
        path: '/',
        component: Read
    },
    {
        name: 'create',
        path: '/create',
        component: Create
    },
    {
        name: 'update',
        path: '/detail/:id',
        component: Update
    }
]

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount("#app");