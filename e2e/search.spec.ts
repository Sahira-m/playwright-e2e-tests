import { test, expect, Page } from '@playwright/test';
 
test.describe('Admin Search ', () => {
test('Searching Admin', async ({ page }) => {
await page.goto('/web/index.php/admin/viewSystemUsers');
   await page.locator('input.oxd-input').first().fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();

});
});  
