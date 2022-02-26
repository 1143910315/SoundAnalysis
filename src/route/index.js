import { createRouter, createWebHashHistory } from "vue-router"

const index = () => import("../components/Function.vue")

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})