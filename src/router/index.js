// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import CodeRepository from "../views/CodeRepository/CodeRepository.vue";
import RegisterView from "../views/RegisterView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  }, // 重定向到登录页面
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/repository",
    name: "CodeRepository",
    component: CodeRepository,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView, // Add Register route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
