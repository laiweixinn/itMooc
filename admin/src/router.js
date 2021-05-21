import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login.vue"
import Admin from "@/views/admin.vue"
import welcome from "@/views/admin/welcome"
import Chapter from "@/views/admin/chapter"
import Section from "@/views/admin/section"



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
            path: "/",
            name: "admin",
            component: () => import("@/views/admin"),
            children:[{
                path:"welcome",
                name:"welcome",
                component:() => import("@/views/admin/welcome")
            },{
                path:"business/chapter",
                name:"business/chapter",
                component:() => import("@/views/admin/chapter")
            },{
                path:"business/section",
                name:"business/section",
                component:() => import("@/views/admin/section")
            }]
        },

    ]
})