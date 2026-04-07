import { chromium, FullConfig } from '@playwright/test';

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/');
/* await page.goto('https://opensource-demo.orangehrmlive.com/', {
  waitUntil: 'domcontentloaded',
}); */
  // Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

 //await page.waitForURL('**/dashboard');

  // Save session
  await page.context().storageState({ path: 'state.json' });

 // await browser.close();
}

export default globalSetup;