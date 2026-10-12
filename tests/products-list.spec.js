import { test, expect } from '@playwright/test';

test('Products catalog page renders properly with circular cards', async ({ page }) => {
  await page.goto('/products');

  // Verify Heading
  await expect(page.locator('h2:has-text("PRODUCTS")')).toBeVisible();

  // Wait for loading spinner to detach
  await page.waitForSelector('.animate-spin', { state: 'detached', timeout: 20000 });

  // Take screenshot of products catalog
  await page.screenshot({ path: 'test-results/products-catalog.png', fullPage: false });
});
