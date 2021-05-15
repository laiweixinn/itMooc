import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login.vue"
import Admin from "@/views/admin.vue"


Vue.use(Router)
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "*",
            redirect: "/login",
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/resign",
            name: "resign",
            component: () => import("@/views/Resign.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("@/views/admin.vue")
        },

    ]
})