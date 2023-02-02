import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import ContactView from "../views/ContactView.vue"
import NotFound from "../views/404.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/cars/:id",
            name: "car",
            component: CarView,
            children: [
                {
                    path: "contact",
                    component: ContactView
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: NotFound
        }
    ]
})

export default router