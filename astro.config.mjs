import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  routes: [
    { path: "/", component: "pages/index.astro" },
    {
      path: "/explorations/:slug",
      component: "pages/explorations/[slug].astro",
    },
  ],
});
