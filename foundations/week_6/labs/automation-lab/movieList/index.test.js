//////// Selenium Boilerplate ////////

const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

/////////////////////////////////////

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('Movie App Tests', async () => {

    test('Adds movie to list', async () => {
        let input = await driver.findElement(By.id('input'))
        await input.sendKeys('Jaws\n')
        let addedMovie = await driver.findElement(By.tagName('span')).getText()
        console.log(addedMovie)
        
        expect(addedMovie).toContain('Jaws')
    })

    test('Adds strikethrough for watched movie', async () => {
        let input = await driver.findElement(By.id('input'))
        await input.sendKeys('Jaws\n')
        await driver.sleep(2000)
        let addedMovie = await driver.findElement(By.tagName('span')).click()
        await driver.sleep(2000)
        let strikeThrough = await driver.findElement(By.className('checked')).getText()
        console.log(strikeThrough)

        expect(strikeThrough).toContain('Jaws')
    })

    test('Correctly deletes movie', async () => {
        let input = await driver.findElement(By.id('input'))
        await input.sendKeys('Jaws\n')
        await driver.sleep(2000)
        let clickDelete = await driver.findElement(By.id('Jaws')).click()
        let deleteMessage = await driver.findElement(By.id('message')).isDisplayed()
        console.log(deleteMessage)

        expect(deleteMessage).toBeTruthy()
    })


})