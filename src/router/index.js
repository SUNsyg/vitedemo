/*
 * @Description: 
 * @Author: Sun yinge
 * @Date: 2022-07-28 15:04:44
 * @LastEditTime: 2022-08-02 11:21:32
 * @LastEditors: Sun yinge
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:id",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

// router.beforeEach((news, old, next) => {
//   console.log(news, old, next)
//   next()
// })

export default router;
