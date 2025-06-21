// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  
  timeout : 40 * 1000,
  expect : {
   timeout : 5 * 1000 
  },
  use: {
    browserName: 'webkit'
    // headless: false
    
  },
  reporter: 'html'


 
})
module.exports = config
