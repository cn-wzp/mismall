import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router(
     {
    routes:[
        {
            path: '/',
            component: resolve => require(['../pages/Home.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'home'
        }, //首页
        {
            path: '/Nav',
            component: resolve => require(['../components/nav.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'nav'
        }, 
        {
            path: '/Share',
            component: resolve => require(['../components/share.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'share'
        }, 
        {
            path: '/Bodynav',
            component: resolve => require(['../components/Bodynav.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'Bodynav'
        }, 
        {
            path: '/content',
            component: resolve => require(['../components/content.vue'], resolve),
            meta: {
                auth: true
            },
            name: 'content'
        }, 
    ]
})
