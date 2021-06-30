// webdriver-reproduction.ts
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const EVASION_ENABLED = true;

const stealth = StealthPlugin();
if (!EVASION_ENABLED) {
  // evasion should be disabled
  stealth.enabledEvasions.delete("navigator.webdriver");
}
puppeteer.use(stealth);

export async function main() {
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: false,
    devtools: true,
  });

  const page = await browser.newPage();
  await page.goto("https://httpbin.org/ip");

  const webdriver = await page.evaluate(() => window.navigator.webdriver);
  if (EVASION_ENABLED) {
    console.log("Evasion is enabled");
  } else {
    console.log("Evasion is disabled");
  }
  console.log("window.navigator.webdriver = " + webdriver);
  /**
   * __navigator.webdriver evasion ON:__
   * window.navigator.webdriver = undefined
   *
   * __navigator.webdriver evasion OFF:__
   * window.navigator.webdriver = true
   */
}

void main();
