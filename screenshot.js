const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 820, height: 312, deviceScaleFactor: 2 });
  const filePath = 'file:///' + path.resolve('facebook-header.html').replace(/\\/g, '/');
  await page.goto(filePath);
  await new Promise(r => setTimeout(r, 2000)); // wait for fonts
  await page.screenshot({
    path: 'facebook-header.png',
    clip: { x: 0, y: 0, width: 820, height: 312 }
  });
  await browser.close();
  console.log('done');
})();
