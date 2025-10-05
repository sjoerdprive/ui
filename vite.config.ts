import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        preserveModules: true, // ⬅️ keeps folder/file structure
        preserveModulesRoot: "src",
        dir: "dist",
      },
    },
  },
});
