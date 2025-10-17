import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "path";
import preserveDirectives from "rollup-preserve-directives";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    preserveDirectives(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    copyPublicDir: false,
    lib: {
      name: "sjoerd-ui",
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true, // ⬅️ keeps folder/file structure
        dir: "dist",
      },
      external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss", "**/*.stories.tsx"],
    },
  },
});
