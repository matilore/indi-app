import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const config = {
    resolve: {
      alias: {
        "@/domain": "/src/domain",
        "@/application": "/src/application",
        "@/presentation": "/src/infrastructure/presentation",
        "@/infrastructure": "/src/infrastructure",
      },
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test-setup.ts",
    },
  };

  if (mode === "development") {
    Object.assign(config, {
      build: {
        minify: false,
      },
    });
  }
  return config;
});
