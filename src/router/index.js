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
            redirect: "/home",
            children: [{
                path: "home",
                name: "home",
                component: () =>
                    import ("@/views/home/index"),
                meta: { title: "首页", icon: "icon" },
            }]
        },
        {
            path: "/event",
            component: Layout,
            redirect: "/event/list",
            name: "event",
            meta: { title: '大事记', icon: '' },
            children: [{
                    path: "list",
                    name: "list",
                    component: () =>
                        import ("@/views/events/EventList"),
                    meta: { title: "事记列表", icon: "", keepAlive: true }
                },
                {
                    path: "add",
                    name: "add",
                    component: () =>
                        import ("@/views/events/EventAdd"),
                    meta: { title: "添加事记", icon: "" }
                },
                {
                    path: "update",
                    name: "update",
                    component: () => import ("@/views/events/EventUpdate"),
                    meta: { title: "更新事记", icon: ""}
                }
            ]
        }

    ]
})