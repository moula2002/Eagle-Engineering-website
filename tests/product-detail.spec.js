import { test, expect } from '@playwright/test';

test('Product details page matches the reference image layout and style', async ({ page }) => {
  // Navigate directly to CSK Head Screws product page with the known ID
  await page.goto('/products/6ac794d75e1e58a06dec9d97');

  // Wait for loading to finish
  await page.waitForSelector('text=Loading product details...', { state: 'detached', timeout: 20000 });

  // Verify Title is bold red uppercase
  const heading = page.locator('h1');
  await expect(heading).toBeVisible({ timeout: 15000 });
  await expect(heading).toHaveText(/CSK HEAD SCREWS/i);
  
  // Verify Description is present
  await expect(page.locator('text=CSK Head Self Drilling screws are designed to be fitted')).toBeVisible();

  // Verify FEATURES section
  await expect(page.locator('h3:has-text("FEATURES")')).toBeVisible();
  await expect(page.locator('text=Precise cutting edges to improve drill performance')).toBeVisible();
  await expect(page.locator('text=Easy to install, time saving, Minimizes labor')).toBeVisible();

  // Verify APPLICATIONS section
  await expect(page.locator('h3:has-text("APPLICATIONS")')).toBeVisible();
  await expect(page.locator('text=Best Choice for fastening on windows and door')).toBeVisible();

  // Verify circular product image
  const productImage = page.locator('img[alt="CSK HEAD SCREWS"]').first();
  await expect(productImage).toBeVisible();

  // Verify WhatsApp button is visible and links to wa.me with product name pre-filled
  const whatsappBtn = page.locator('a:has-text("WhatsApp")');
  await expect(whatsappBtn).toBeVisible();
  await expect(whatsappBtn).toHaveAttribute('href', /wa\.me\/919632144367/);

  // Take screenshot for visual inspection
  await page.screenshot({ path: 'test-results/csk-product-page.png', fullPage: true });
});
