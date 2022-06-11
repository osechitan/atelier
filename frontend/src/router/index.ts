import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Articles",
      component: () => import("../views/ArticleIndex.vue"),
    },
    {
      path: "/article/:id",
      name: "Article",
      component: () => import("../views/ArticleShow.vue"),
      props: true,
    },
  ],
});

export default router;
