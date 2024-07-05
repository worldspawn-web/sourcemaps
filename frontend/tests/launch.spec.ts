import { test, expect } from '@playwright/test';

// vite + ts module bug
// import links from '../src/data/links.json' assert { type: 'json' };

const navigateToLink = async (page, linkText, expectedUrl) => {
  await page.getByText(linkText).click();
  await expect(page).toHaveURL(expectedUrl);
  await page.goto('localhost:5173');
};

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5173');
});

test('is this the correct page?', async ({ page }) => {
  await expect(page).toHaveTitle(/SourceMaps/);
});

test('how the nav links are feeling today?', async ({ page }) => {
  await navigateToLink(page, 'Maps', 'https://gamebanana.com/members/1695181');
  await navigateToLink(
    page,
    'YouTube',
    'https://www.youtube.com/channel/UCGFGwp-vh5FVAKxrqL1Xicg'
  );
  await navigateToLink(page, 'GitHub', 'https://github.com/worldspawn-web');
});

test('how the images are doing?', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');
  const images = page.locator('img');
  console.log(await images.count());

  const allImages = await images.all();
  for await (const img of allImages) {
    const imgSrc = await img.getAttribute('src');
    expect.soft(imgSrc?.length).toBeGreaterThan(1);

    //@ts-expect-error most likely will not be undefined
    if (imgSrc?.length > 1) {
      const res = await page.request.get('http://localhost:5173/' + imgSrc);
      expect.soft(res.status()).toBe(200);
    }
  }
});
