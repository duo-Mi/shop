import {createWebHistory,createRouter} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name: 'layout',
            component: () => import('../views/layout/index.vue')
        },
        {
            path:'/login',
            name: 'login',
            component: () => import('../views/login/index.vue')
        }
    ]
})
export default router