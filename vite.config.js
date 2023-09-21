import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      babel: { babelrc: true },
    }),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // base: process.env.NODE_ENV === "production" ? "/jdb-dr/" : "/",
});
