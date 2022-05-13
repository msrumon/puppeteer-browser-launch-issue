import Puppeteer from 'puppeteer';

try {
  const browser = await Puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({ path: './out/google.png' });
  await page.close();

  await browser.close();
  console.log('DONE! Check `out` directory.');
} catch (error) {
  console.error(error.message);
}
