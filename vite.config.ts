import vue from "@vitejs/plugin-vue";
import autoprefixer from "autoprefixer";
import path from "path";
import tailwind from "tailwindcss";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from "unplugin-vue-router/vite";
import Layouts from "vite-plugin-vue-layouts";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dirs: ["./src/composables"],
      dts: "./src/types/auto-imports.d.ts",
      vueTemplate: true,
    }),
    Components({
      dts: "./src/types/components.d.ts",
    }),
    Pages({
      dts: "./src/types/typed-router.d.ts",
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
