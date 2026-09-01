import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        research: resolve(__dirname, "research/index.html"),
        publications: resolve(__dirname, "publications/index.html"),
        teaching: resolve(__dirname, "teaching/index.html"),
        about: resolve(__dirname, "about/index.html"),
        cv: resolve(__dirname, "cv/index.html"),
      },
    },
  },
});
