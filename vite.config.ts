import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    tanstackStart({
      router: {
        quoteStyle: "double",
      },
    }),
    nitro(),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
