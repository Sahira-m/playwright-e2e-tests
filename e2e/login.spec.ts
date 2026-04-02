import { test, expect } from '@playwright/test';
test.describe('OrangeHRM Login Tests', () => {
test('Login with valid credentials', async ({ page }) => {
  await page.goto("");
  await page.getByPlaceholder('username').fill('Admin');
  await page.getByPlaceholder('password').fill('admin123');
  await page.getByRole('button', { name: 'Login'}).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();
});
});
test.describe('  Login with InvalidCredentials', () => {

  test('User should see error message for invalid credentials', async ({ page }) => {
    await page.goto("");
    await page.getByPlaceholder('Username').fill('AdminTesovex');
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});