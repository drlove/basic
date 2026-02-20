import { test, expect } from '@playwright/test';

test('PWA loads with correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('Basic PWA');
  await expect(page.locator('h1')).toHaveText('Basic PWA Scaffold');
});

test('ping button is present', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole('button', { name: 'Test App Logic' })).toBeVisible();
});
