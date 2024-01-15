const puppeteer = require ('puppeteer');

 async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.blockchainalpha.tech');

    await page.screenshot({ path: 'example.jpg', fullPage: true});
    await browser.close();
 }

  run();