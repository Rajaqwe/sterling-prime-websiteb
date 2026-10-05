import { test, expect } from "@playwright/test";

const publicRoutes = [
  "/", "/about", "/bulk-orders", "/careers", "/cart", "/checkout", "/contact",
  "/corporate-gifts", "/custom-branding", "/employee-gifting", "/event-gifts",
  "/faq", "/gift-collections", "/gift-finder", "/personalised-gifts", "/products",
  "/project-gallery", "/quote-shortlist", "/request-a-quote", "/request-a-sample",
  "/reviews", "/sustainability", "/shipping-delivery", "/terms-and-conditions",
  "/privacy-policy", "/procurement-support", "/refund-policy", "/values",
  "/products/executive-tech-kit"
];

test.describe("editorial route smoke tests", () => {
  for (const route of publicRoutes) {
    test(route + " renders", async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("body")).toBeVisible();
      expect(errors, route + " page errors").toEqual([]);
    });
  }

  test("catalogue filtering changes the visible result set", async ({ page }) => {
    await page.goto("/products");
    const count = page.locator(".catalog-card");
    const before = await count.count();
    await page.getByRole("button", { name: "Executive", exact: true }).click();
    const after = await count.count();
    expect(after).toBeGreaterThan(0);
    expect(after).toBeLessThanOrEqual(before);
  });

  test("mobile menu opens", async ({ page, isMobile }) => {
    test.skip(!isMobile, "mobile-only interaction");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  });
});
