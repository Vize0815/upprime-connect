const puppeteer = require('puppeteer');
const path = require('path');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  await page.goto('file:///' + path.resolve('instagram-post-4.html').replace(/\\/g, '/'));
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: 'instagram-post-4.png', clip: { x: 0, y: 0, width: 1080, height: 1080 } });
  await browser.close();
  console.log('done');
})();
