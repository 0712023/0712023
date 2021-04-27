import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import ('../views/Home.vue')
    },
    {
        path: '/member/:memId',
        name: 'Member',
        component: () => import ('../views/Member/Member.vue')
    },
    {
        path: '/vendor/:vendorId',
        name: 'Vendor',
        component: () => import ('../views/Vendor/Vendor.vue')
    },
    {
        path: '/admin/:aid',
        name: 'Admin',
        component: () => import ('../views/Admin/Admin.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    // eslint-disable-next-line no-undef
    base: process.env.BASE_URL,
    routes
})

export default router