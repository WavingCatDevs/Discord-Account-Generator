const { Builder, By, Key, until } = require('selenium-webdriver');
const crypto = require("crypto");

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function gen() {
    var driver = await new Builder().forBrowser('firefox').build();
    var email = 'waving' + crypto.randomBytes(5).toString('hex') + '@gmail.com';
    var username = 'ez' + crypto.randomBytes(5).toString('hex');
    var password = 'waving' + crypto.randomBytes(5).toString('hex') + 'pass';

    await driver.get('https://discord.com/register');

    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/form/div/div/div[1]/div/input')).sendKeys(email);
    console.log('[INFO]' + " " + 'Email Done' + " : " + email);

    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/form/div/div/div[2]/div/input')).sendKeys(username);
    console.log('[INFO]' + " " + 'Username Done' + " : " + username);

    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/form/div/div/div[3]/div/input')).sendKeys(password, Key.TAB, 'Jan', Key.ENTER, '1', Key.ENTER, '2000', Key.ENTER);
    console.log('[INFO]' + " " + 'Password Done' + " : " + password);
    console.log('[INFO]' + " " + 'DOB Done' + " : " + 'January, 1, 2000');

    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/form/div/div/div[5]/label/input')).click();
    console.log('[INFO]' + " " + 'Agreed to the TOS');

    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div/div[1]/div/div/div/form/div/div/div[7]/button')).click();
    console.log('[INFO]' + " " + 'Attempting to submit..');

   // TODO: Captcha

   
}

gen();