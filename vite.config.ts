import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const devConfig = defineConfig({
  plugins: [react()],
});

export default devConfig;
