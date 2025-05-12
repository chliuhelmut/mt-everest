import faker from 'faker';
import pti from 'puppeteer-to-istanbul';
import puppeteer from 'puppeteer';


const APP = "http://localhost";
const lead = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

let page;
let browser;
let keyboard;
const width = 1600;
const height = 900;

describe("Land site", () => {
  beforeAll(async () => {
    
          
   browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
   });
   page = await browser.newPage();
   await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
    ]);  
   await page.goto(APP);
   await page.setViewport({ width, height });
   
},30000);

/*   
  test("lead can submit a contact request", async () => {
    
    
    const html = await page.$eval('.App-title', e => e.innerHTML);
    expect(html).toBe('Welcome to React');
  }, 16000);
  
  test("assert the number of nav menu", async () => {
      
    const navbar = await page.$eval('.navbar', el => el ? true : false);
    const listItems = await page.$$('.nal-li');
    
    expect(navbar).toBe(true);
    expect(listItems.length).toBe(4);
    
  }, 16000);
  
   test("pick a date ", async () => {
      
    const date = await page.$eval('.datepicker-wrapper', el => el ? true : false);
    expect(date).toBe(true);
    
    const datepicker = await page.$('#datepicker');
    await page.click('#datepicker');
    await page.keyboard.press('Enter');
    await page.screenshot({path: 'date.png'});
    
    
    
  }, 16000);
  */
  test('login form incorrectly', async () => {
 
  await page.click('#email');
  await page.type('#email', lead.email);
  
  await page.click('#password');
  await page.type('#password', lead.password);
  
  await page.click('.button.primary');
  await page.waitForSelector('#email');
  
  
  } , 32000);
  
  test('clear text', async () => {
  
  await page.click('#email',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  
  //await page.type('#email', '');
  await page.click('#password',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  //await page.type('#password', '');
  
   
  
  } , 32000);
  
  test('login form works correctly', async () => {
  
  await page.click('#email');
  await page.type('#email', "user@kaneoh.com");
  
  await page.click('#password');
  await page.type('#password', "user");
  
  await page.click('.button.primary');
  //await page.waitForSelector('.ui.form');
  const prop_form = await page.waitForSelector('.ui.form > button');
  //console.log(prop_form);
  //expect(prop_logout).toBe("Logout");
  await page.click('.ui.form > button');   
  } , 55000);

  afterAll(() => {
     
/*     
    const[jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage(),
    ]);
    pti.write(jsCoverage);   
      */
    browser.close();
 });
  
});

