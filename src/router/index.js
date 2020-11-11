import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    // Login
    {
        path:'/login',
        name:'login',
        component: () => import('../views/ViewLogin.vue'),
    },
    //Dashboard
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/ViewDashboard.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router