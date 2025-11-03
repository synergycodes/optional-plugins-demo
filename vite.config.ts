import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fallbackForMissingPlugin } from "./src/features/plugins/optional-plugins-vite/fallback-for-missing-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), fallbackForMissingPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
