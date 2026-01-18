import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //* This is important for vite to run in a docker image
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
