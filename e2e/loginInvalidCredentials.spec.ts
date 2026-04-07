import { test, expect } from '@playwright/test';
test.describe('  Login with InvalidCredentials', () => {

  test('User should see error message for invalid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
     // Logout properly
  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
    
    //Navigate to login page 
     await expect(page).toHaveURL(/auth\/login/);

    await page.getByPlaceholder('Username').fill('AdminTesovex');
    await page.getByPlaceholder('password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});  