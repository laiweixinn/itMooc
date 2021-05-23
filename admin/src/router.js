import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/login.vue"
import Admin from "@/views/admin.vue"
import Welcome from "@/views/admin/welcome.vue"
import Category from "@/views/admin/category.vue"
import Course from"@/views/admin/course.vue"
import Chapter from "@/views/admin/chapter.vue"
import Section from "@/views/admin/section.vue"
import Content from "@/views/admin/content.vue"
import Teacher from "@/views/admin/teacher.vue"
import File from "@/views/admin/file.vue"





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
                path:"business/category",
                name:"business/category",
                component:() => import("@/views/admin/category")
            },{
                path:"business/course",
                name:"business/course",
                component:() => import("@/views/admin/course")
            },{
                path:"business/chapter",
                name:"business/chapter",
                component:() => import("@/views/admin/chapter")
            },{
                path:"business/section",
                name:"business/section",
                component:() => import("@/views/admin/section")
            },{
                path:"business/content",
                name:"business/content",
                component:() => import("@/views/admin/content")
            },{
                path:"business/teacher",
                name:"business/teacher",
                component:() => import("@/views/admin/teacher")
            },{
                path:"file/file",
                name:"file/file",
                component:() => import("@/views/admin/file")
            }]
        },

    ]
})