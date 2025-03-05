//operating_with_playwright.spec.ts
import { test, expect } from "@playwright/test";

test.describe("První test v Playwright", () => {
  test("Přihlášení do Tredgate Pmtool", async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
    await page
      .getByRole("textbox", { name: "Username" })
      .fill("cypress_zima_2024");
    await page
      .getByRole("textbox", { name: "Password" })
      .fill("Zima2024Cypress");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator('//*[@id="welcome-page-header"]')).toHaveText(
      "Vítej v testovací aplikaci Tredgateaaaa Project"
    );
  });
});
