import faker from 'faker';
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
    //headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
   });
   page = await browser.newPage();
   await page.goto(APP);
   await page.setViewport({ width, height });
   
},30000);

   
  test('To Signup form', async () => {
  await page.waitForSelector('span');
  await page.click('span');
  await page.waitForSelector('#policy');
  
  
      
  }, 36000);
  
    
  test('signup without email', async () => {
 
  await page.click('#firstName');
  await page.type('#firstName', lead.firstName);
  
  await page.click('#lastName');
  await page.type('#lastName', lead.lastName);
  
  await page.click('#password');
  await page.type('#password', lead.password);

  await page.click('[type="button"]');
  await page.waitForSelector('#email');
  
  
  } , 45000);
  
  test('clear text', async () => {
  
  await page.click('#firstName',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  
  //await page.type('#email', '');
  await page.click('#lastName',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  //await page.type('#password', '');
  await page.click('#email',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  
  await page.click('#password',{clickCount : 3 }); 
  await page.keyboard.press('Delete');
  
  } , 45000);
  
  test('signup form works correctly', async () => {
  
  await page.click('#firstName');
  await page.type('#firstName', lead.firstName);
  
  await page.click('#lastName');
  await page.type('#lastName', lead.lastName);
  
  await page.click('#email');
  await page.type('#email', lead.email);
  
  await page.click('#password');
  await page.type('#password', lead.password);

  await page.click('[type="button"]');
  //back to sign in form
  await page.waitForSelector('span');
  await page.click('span');
  
  } , 50000);
  
  test('login with signup date', async () => {
      
  await page.waitForSelector('form > h1');
  await page.click('#email');
  await page.type('#email',  lead.email);
  
  await page.click('#password');
  await page.type('#password', lead.password);
  
  await page.click('.button.primary');
  //await page.waitForSelector('.ui.form');
  const prop_form = await page.waitForSelector('.ui.form > button');
  //console.log(prop_form);
  //expect(prop_logout).toBe("Logout");
  await page.click('.ui.form > button');   
  } , 55000);

  afterAll(() => {
   console.log(lead.email);
   console.log(lead.password);   
   browser.close();
 });
  
});

