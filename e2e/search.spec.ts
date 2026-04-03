import { test, expect, Page } from '@playwright/test';
 async function login(page: Page) {
await page.goto('/');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('password').fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();
     await expect(page).toHaveURL(/dashboard/);

}
test.describe('Admin Search ', () => {
test('Searching Admin', async ({ page }) => {

 await login(page);
await page.goto('/web/index.php/admin/viewSystemUsers');
   await page.locator('input.oxd-input').first().fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();

});
}); 