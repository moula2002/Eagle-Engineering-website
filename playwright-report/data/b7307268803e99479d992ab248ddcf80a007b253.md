# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-detail.spec.js >> Product details page matches the reference image layout and style
- Location: tests\product-detail.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1')
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h1') with timeout 15000ms
  - waiting for locator('h1')

```

```yaml
- img "Eagle Engineering Logo"
- navigation:
  - link "Dashboard":
    - /url: /
  - link "Categories":
    - /url: /categories
  - link "Sub Categories":
    - /url: /sub-categories
  - link "Products":
    - /url: /products
  - link "Inquiries":
    - /url: /inquiries
  - link "Settings":
    - /url: /settings
- button "Logout"
- banner:
  - textbox "Search..."
  - button
  - text: A
- main
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Product details page matches the reference image layout and style', async ({ page }) => {
  4  |   // Navigate directly to CSK Head Screws product page with the known ID
  5  |   await page.goto('/products/6ac794d75e1e58a06dec9d97');
  6  | 
  7  |   // Wait for loading to finish
  8  |   await page.waitForSelector('text=Loading product details...', { state: 'detached', timeout: 20000 });
  9  | 
  10 |   // Verify Title is bold red uppercase
  11 |   const heading = page.locator('h1');
> 12 |   await expect(heading).toBeVisible({ timeout: 15000 });
     |                         ^ Error: expect(locator).toBeVisible() failed
  13 |   await expect(heading).toHaveText(/CSK HEAD SCREWS/i);
  14 |   
  15 |   // Verify Description is present
  16 |   await expect(page.locator('text=CSK Head Self Drilling screws are designed to be fitted')).toBeVisible();
  17 | 
  18 |   // Verify FEATURES section
  19 |   await expect(page.locator('h3:has-text("FEATURES")')).toBeVisible();
  20 |   await expect(page.locator('text=Precise cutting edges to improve drill performance')).toBeVisible();
  21 |   await expect(page.locator('text=Easy to install, time saving, Minimizes labor')).toBeVisible();
  22 | 
  23 |   // Verify APPLICATIONS section
  24 |   await expect(page.locator('h3:has-text("APPLICATIONS")')).toBeVisible();
  25 |   await expect(page.locator('text=Best Choice for fastening on windows and door')).toBeVisible();
  26 | 
  27 |   // Verify circular product image
  28 |   const productImage = page.locator('img[alt="CSK HEAD SCREWS"]').first();
  29 |   await expect(productImage).toBeVisible();
  30 | 
  31 |   // Verify WhatsApp button is visible and links to wa.me with product name pre-filled
  32 |   const whatsappBtn = page.locator('a:has-text("WhatsApp")');
  33 |   await expect(whatsappBtn).toBeVisible();
  34 |   await expect(whatsappBtn).toHaveAttribute('href', /wa\.me\/919632144367/);
  35 | 
  36 |   // Take screenshot for visual inspection
  37 |   await page.screenshot({ path: 'test-results/csk-product-page.png', fullPage: true });
  38 | });
  39 | 
```