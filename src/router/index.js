import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/components/Layout'

export default new Router({
    routes: [{
            path: "/login",
            name: "Login",
            component: () =>
                import ('@/views/Login')
        },
        {
            path: "/register",
            name: "Register",
            component: () =>
                import ('@/views/Register')
        },
        {
            path: "",
            component: Layout,
        }

    ]
})