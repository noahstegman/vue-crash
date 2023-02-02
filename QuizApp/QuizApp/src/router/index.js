import {createRouter, createWebHistory} from "vue-router";
import QuizViewView from "../views/QuizView.vue"
import QuizView from "../views/Quiz.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizViewView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        }
    ]
})

export default router