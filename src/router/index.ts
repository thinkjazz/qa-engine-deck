import { createRouter, createWebHistory } from 'vue-router';
import Board from '../views/QABoard.vue';

const routes = [
  {
    path: "/",
    name: "Board",
    component: Board,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
