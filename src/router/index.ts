import { createRouter, createWebHistory } from 'vue-router';
// import Board from '../views/QABoard.vue';
// import Login from '../views/Login.vue';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component:  () =>  import("../views/Home.vue"),
  },
  {
    path: "/deck",
    name: "Board",
    component:  () => import("../views/QABoard.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component:  () =>  import('../views/Login.vue'),
  },
  {
    path: "/sidebar",
    name: "Sidebar",
    component:  () =>  import("../views/Sidebar.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () =>  import("../views/Settings.vue"),
  },
  {
    path: "/create-project",
    name: "CreateProject",
    component: () => import("../components/CreateProject.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
