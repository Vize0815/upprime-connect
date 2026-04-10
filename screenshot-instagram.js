const puppeteer = require('puppeteer');
const path = require('path');

const assets = [
  { file: 'instagram-profile.html', out: 'instagram-profile.png', w: 500,  h: 500  },
  { file: 'instagram-post.html',    out: 'instagram-post.png',    w: 1080, h: 1080 },
  { file: 'instagram-story.html',   out: 'instagram-story.png',   w: 1080, h: 1920 },
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  for (const a of assets) {
    const page = await browser.newPage();
    await page.setViewport({ width: a.w, height: a.h, deviceScaleFactor: 2 });
    const url = 'file:///' + path.resolve(a.file).replace(/\\/g, '/');
    await page.goto(url);
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: a.out, clip: { x: 0, y: 0, width: a.w, height: a.h } });
    console.log('✓', a.out);
    await page.close();
  }
  await browser.close();
})();
