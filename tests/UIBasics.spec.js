const {test, expect} = require('@playwright/test')

test('First Playwright Test', async ({browser})=>
    {
        // create a new broswer context
       const context = await browser.newContext()
       const page = await context.newPage();
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
       await page.locator("#username").fill("rahulshettyacademy") 
       await page.locator("[type='password']").fill("learning")
       await page.locator("#signInBtn").click(); 
}
);

test('2nd way to run playwright test', async ({page})=>{
    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google")

})