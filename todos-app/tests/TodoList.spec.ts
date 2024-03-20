import { test, expect } from '@playwright/test';

test('Test add todo in todolist', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Faire des tests');
  await page.getByText('Completed ?').click();
  await page.getByRole('button', { name: 'Ok' }).click();

  
});