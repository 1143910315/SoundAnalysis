import { createRouter, createWebHashHistory } from "vue-router"

const index = () => import("../components/Function.vue")
const tensorFlowTest = () => import("../components/TensorFlowTest.vue")

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  },{
    path: "/tensorFlowTest",
    name: "tensorFlowTest",
    component: tensorFlowTest
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})