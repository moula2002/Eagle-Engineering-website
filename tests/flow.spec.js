import { test, expect } from '@playwright/test';

test('Check main flow based on exact design image', async ({ page }) => {
  await page.goto('/');

  // Check the title/hero
  await expect(page.locator('img[alt="Eagle Engineering"]').first()).toBeVisible();

  // Check new navigation items
  await expect(page.locator('a:has-text("PRODUCTS")').first()).toBeVisible();
  await expect(page.locator('a:has-text("ABOUT US")').first()).toBeVisible();
  await expect(page.locator('a:has-text("DOWNLOAD")').first()).toBeVisible();
  await expect(page.locator('a:has-text("QUALITY")').first()).toBeVisible();

  // Test navigation to Products
  await page.locator('a:has-text("PRODUCTS")').first().click();
  
  // Wait for URL to change to /products
  await expect(page).toHaveURL(/.*products/);

  // Verify Products heading exists
  await expect(page.locator('h2:has-text("PRODUCTS")')).toBeVisible();

  // Verify fastener products are present
  await expect(page.locator('text=CSK HEAD SCREWS').first()).toBeVisible();
  await expect(page.locator('text=PAN HEAD SCREWS').first()).toBeVisible();
  await expect(page.locator('text=DRYWALL SCREWS').first()).toBeVisible();
});
