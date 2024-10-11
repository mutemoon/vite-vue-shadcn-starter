import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";
import { setupLayouts } from "virtual:generated-layouts";

export const router = createRouter({
  history: createWebHistory(),
  // pass the generated routes written by the plugin 🤖
  routes: setupLayouts(routes),
});
