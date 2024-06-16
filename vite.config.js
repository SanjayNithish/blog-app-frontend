import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": "http://localhost:8010", // Proxy API requests starting with /user to the backend server
      "/blog": "http://localhost:8010",
    },
  },
});
