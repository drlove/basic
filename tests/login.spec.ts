import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h1')).toHaveText('Dashboard');
});

test('validation error when fields empty', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('p')).toHaveText('Email and password are required');
});

test('invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByLabel('Email').fill('wrong@example.com');
  await page.getByLabel('Password').fill('wrongpassword');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('p')).toHaveText('Invalid credentials');
});

