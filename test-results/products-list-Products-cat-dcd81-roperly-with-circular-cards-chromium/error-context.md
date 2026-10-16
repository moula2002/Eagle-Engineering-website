# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: products-list.spec.js >> Products catalog page renders properly with circular cards
- Location: tests\products-list.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2:has-text("PRODUCTS")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h2:has-text("PRODUCTS")') with timeout 5000ms
  - waiting for locator('h2:has-text("PRODUCTS")')

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
  3  | test('Products catalog page renders properly with circular cards', async ({ page }) => {
  4  |   await page.goto('/products');
  5  | 
  6  |   // Verify Heading
> 7  |   await expect(page.locator('h2:has-text("PRODUCTS")')).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  8  | 
  9  |   // Wait for loading spinner to detach
  10 |   await page.waitForSelector('.animate-spin', { state: 'detached', timeout: 20000 });
  11 | 
  12 |   // Take screenshot of products catalog
  13 |   await page.screenshot({ path: 'test-results/products-catalog.png', fullPage: false });
  14 | });
  15 | 
```