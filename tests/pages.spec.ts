import { test, expect } from "@playwright/test";

const viewports = {
  desktop: { width: 1280, height: 800 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 },
};

const pages = [
  { name: "home", path: "/", devices: ["desktop", "tablet", "mobile"] },
  { name: "impressum", path: "/impressum/", devices: ["desktop", "mobile"] },
  {
    name: "datenschutz",
    path: "/datenschutz/",
    devices: ["desktop", "mobile"],
  },
];

// Baselines are rendered in the Playwright container that CI uses; update them
// with `npm run test:e2e:update-screenshots` or the Update Screenshots workflow
for (const [device, viewport] of Object.entries(viewports)) {
  for (const colorScheme of ["light", "dark"] as const) {
    test.describe(`${device} ${colorScheme}`, () => {
      test.use({ viewport, colorScheme, reducedMotion: "reduce" });

      pages
        .filter((p) => p.devices.includes(device))
        .forEach(({ name, path }) => {
          test(name, async ({ page }) => {
            await page.goto(path);

            await expect(page).toHaveTitle(/Holger/);
            await expect(page).toHaveScreenshot(
              `${name}-${device}-${colorScheme}.png`,
              {
                fullPage: true,
                // The copyright year comes from the build date
                mask: [page.getByText(/©/)],
              },
            );
          });
        });
    });
  }
}
