import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteAliases } from "vite-aliases";

export default defineConfig({
  server: {
    port: "3000",
    open: "/",
    host: true,
  },
  plugins: [vue(), ViteAliases()],
});
