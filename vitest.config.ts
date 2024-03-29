import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["dotenv/config"],
    include: ["./src/**/*.test.ts"],
    environment: "happy-dom"
  },
  resolve: {
    alias: {
      "tailwind-config": "./tailwind.config.ts",
      "@/": "./src/"
    }
  }
});