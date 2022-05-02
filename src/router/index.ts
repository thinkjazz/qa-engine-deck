import { createRouter, createWebHistory } from 'vue-router';
// import Board from '../views/QABoard.vue';
// import Login from '../views/Login.vue';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: async () => await import("../views/Home.vue"),
  },
  {
    path: "/deck",
    name: "Board",
    component: async () => await import("../views/QABoard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: async () => await import('../views/Login.vue'),
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    component: async () => await import("../views/Sidebar.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: async () => await import("../views/Settings.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
