# E2E Test with Puppeteer , Jest submodules 
## Coverage report with Puppeteer to Istanbul , nyc

## Todo

## How to start the puppeteer test


1. Start server of Sirius' back-end
2. Run `docker-compose.yml up` on Sirius' back-end
3. Run `npm install` / `yarn install`
4. Run `npm test`

all test scripts under /test will be launched by Puppeteer.

to run specific test script 
- Run `npm jest ./test/spec/${test_script_file}` directly. 

---

## devDependencies version
- "puppeteer": "^1.4.0",
- "puppeteer-to-istanbul": "^1.2.2",
- "jest": "^22.4.4",
- "faker": "^4.1.0",
- "babel-preset-env": "^1.7.0",
