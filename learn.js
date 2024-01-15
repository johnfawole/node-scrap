// defining fs & puppeteer
const fs = require ('fs');
const puppeteer = require ('puppeteer');

 async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com/guide');

    // await page.screenshot({ path: 'example.jpg', fullPage: true});
    // await browser.close();

    const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#courses .card'), (e) => ({
        title: e.querySelector('.card-body h3') .innerText,
        level: e.querySelector('.card-body .level') .innerText,
        url: e.querySelector('.card-footer a') .href,
        promo: e.querySelector('.card-footer .promo-code .promo') .innerText,
    }))
    );

    console.log(courses);

    //save to JSON
    fs.writeFile('brad.json', JSON.stringify(courses), (err) => {
        if (err) throw err;
        console.log('Saved the File Now, buddy')
    }
    );
     
    await browser.close();
 }

 run();
  


  

