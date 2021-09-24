import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4505')
})

afterAll(async () => {
    await driver.quit()
})
describe('testing the squares', async () => {
test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('An X will go into the upper left square', async () => {

    
    let upperLeftSquare = await driver.findElement(By.xpath('//*[@id="cell-0"]'))

    await upperLeftSquare.click()

    await driver.sleep(2000)
});

test('An X will go into the upper right square', async () => {
    let upperRightSquare = await driver.findElement(By.xpath('//*[@id="cell-2"]'))

    await upperRightSquare.click()

   await driver.sleep(2000)  

})

test('An X will go into the middle square', async () => {
    let middleSquare = await driver.findElement(By.xpath('//*[@id="cell-4"]'))

    await middleSquare.click()

    await driver.sleep(2000)
})

})