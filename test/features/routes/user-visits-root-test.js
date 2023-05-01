// feature level tests for user visiting homepage
const {assert} = require('chai');

describe('User visits root', () => {
  describe('posting a quote', () => { 
    it('saves and posts quote', () => {
    
      // Setup
      const quote =
      "Don't think, feel....it is like a finger pointing a way to the moon. Don't concentrate on the finger or you will miss all that heavenly glory!";
      const author = 'Bruce Lee';
      const source =  'Enter the Dragon';

      // Exercise
      browser.url('/');
      browser.setValue('#quote', quote);
      browser.setValue('#author', author);
      browser.setValue('#source', source);
      browser.click('input[type=submit]');

      // Verify
      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), author);
      assert.include(browser.getText('#quotes'), source);
    });
  });
});
