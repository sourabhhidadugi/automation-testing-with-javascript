const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.google.com');
  
    let title = await driver.getTitle();
    assert.equal("Google", title);
  
    await driver.manage().setTimeouts({implicit: 500});
  
    let textBox = await driver.findElement(By.name('q'));
    let SearchButton = await driver.findElement(By.name('btnK'));
    
    await textBox.sendKeys("time");
    await SearchButton.click();

    await new Promise(resolve => setTimeout(resolve, 5000));

  } catch (e) {
    console.log(e)
  } finally {
    console.log("Hi")
    await driver.quit();
  }
}())