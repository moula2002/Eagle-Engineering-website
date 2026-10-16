# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flow.spec.js >> Check main flow based on exact design image
- Location: tests\flow.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('a:has-text("PRODUCTS")').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('a:has-text("PRODUCTS")').first() with timeout 5000ms
  - waiting for locator('a:has-text("PRODUCTS")').first()

```

```yaml
- img "Eagle Engineering"
- heading "Admin Portal" [level=2]
- paragraph: Secure access for authorized personnel only
- text: Email Address
- textbox "Email Address":
  - /placeholder: admin@eagleengineering.com
- text: Password
- textbox "Password":
  - /placeholder: ••••••••
- checkbox "Remember me"
- text: Remember me
- link "Forgot password?":
  - /url: "#"
- button "Sign In"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Check main flow based on exact design image', async ({ page }) => {
  4  |   await page.goto('/');
  5  | 
  6  |   // Check the title/hero
  7  |   await expect(page.locator('img[alt="Eagle Engineering"]').first()).toBeVisible();
  8  | 
  9  |   // Check new navigation items
> 10 |   await expect(page.locator('a:has-text("PRODUCTS")').first()).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  11 |   await expect(page.locator('a:has-text("ABOUT US")').first()).toBeVisible();
  12 |   await expect(page.locator('a:has-text("DOWNLOAD")').first()).toBeVisible();
  13 |   await expect(page.locator('a:has-text("QUALITY")').first()).toBeVisible();
  14 | 
  15 |   // Test navigation to Products
  16 |   await page.locator('a:has-text("PRODUCTS")').first().click();
  17 |   
  18 |   // Wait for URL to change to /products
  19 |   await expect(page).toHaveURL(/.*products/);
  20 | 
  21 |   // Verify Products heading exists
  22 |   await expect(page.locator('h2:has-text("PRODUCTS")')).toBeVisible();
  23 | 
  24 |   // Verify fastener products are present
  25 |   await expect(page.locator('text=CSK HEAD SCREWS').first()).toBeVisible();
  26 |   await expect(page.locator('text=PAN HEAD SCREWS').first()).toBeVisible();
  27 |   await expect(page.locator('text=DRYWALL SCREWS').first()).toBeVisible();
  28 | });
  29 | 
```