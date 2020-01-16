import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [{
        path: '/styleGuide',
        component: () => import('@/views/styleGuide'),
    },
    {
        path: '/',
        redirect: '/styleGuide'
    },

    {
        path: '/404',
        component: () => import('@/views/404'),
        meta: {
            name: '',
            icon: ''
        },
        children: []
    },


    // 404 page must be placed at the end !!!
    {
        path: '*',
        redirect: '/404'
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router