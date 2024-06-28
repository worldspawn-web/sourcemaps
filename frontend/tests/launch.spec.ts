import { test, expect } from '@playwright/test';

const navigateToLink = async (page, linkText, expectedUrl) => {
  await page.getByText(linkText).click();
  await expect(page).toHaveURL(expectedUrl);
  await page.goto('localhost:5173');
};

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173');
});

test('basic tests', async ({ page }) => {
  await expect(page).toHaveTitle(/SourceMaps/);
});

test('navigation links', async ({ page }) => {
  await navigateToLink(page, 'Maps', 'https://gamebanana.com/members/1695181');
  await navigateToLink(
    page,
    'YouTube',
    'https://www.youtube.com/channel/UCGFGwp-vh5FVAKxrqL1Xicg'
  );
  await navigateToLink(page, 'GitHub', 'https://github.com/worldspawn-web');
});
