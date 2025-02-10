import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/cyberInstant/", // Set the base path for GitHub Pages
  plugins: [react()],
});
