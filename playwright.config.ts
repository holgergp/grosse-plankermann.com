import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  snapshotPathTemplate: "{testDir}/screenshots/{arg}{ext}",
  // Screenshot baselines come from the CI container; local browsers render a few
  // pixels differently, so compare them only in CI (or `npm run test:e2e:container`)
  ignoreSnapshots: !process.env.CI,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  webServer: {
    // Bind to IPv4 explicitly: "localhost" resolves to ::1 in the CI container.
    // Own port, so a running dev server (4321) doesn't get in the way
    command: "npm run preview -- --host 127.0.0.1 --port 4330",
    url: "http://127.0.0.1:4330/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://127.0.0.1:4330",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
