import { test, expect } from "@playwright/test";

test.describe("links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("imprint link opens the imprint", async ({ page }) => {
    await page.getByRole("link", { name: "Imprint/Impressum" }).click();
    await expect(page).toHaveURL(/\/impressum\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("privacy link opens the privacy policy", async ({ page }) => {
    await page.getByRole("link", { name: "Privacy/Datenschutz" }).click();
    await expect(page).toHaveURL(/\/datenschutz\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("project links point to YouTube and the podcast", async ({ page }) => {
    await expect(
      page.locator('a[href="https://www.youtube.com/@papperlapapp-dev"]'),
    ).toBeVisible();
    await expect(page.locator('a[href="https://autoweird.fm"]')).toBeVisible();
  });

  test("social links open in a new tab", async ({ page }) => {
    const profiles = {
      GitHub: "https://github.com/holgergp",
      Mastodon: "https://chaos.social/@holgergp",
      Instagram: "https://www.instagram.com/holgergp/",
      LinkedIn: "https://www.linkedin.com/in/holgergp/",
      Xing: "https://www.xing.com/profile/Holger_GrossePlankermann",
      SoundCloud: "https://soundcloud.com/holgergp",
    };
    for (const [name, url] of Object.entries(profiles)) {
      const link = page.getByRole("link", { name: `Visit my ${name} profile` });
      await expect(link).toHaveAttribute("href", url);
      await expect(link).toHaveAttribute("target", "_blank");
    }
  });
});
