// test/routes/index-test.js
const {assert} = require('chai');
const request = require('supertest');
const {jsdom} = require('jsdom');

const app = require('../../app');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = jsdom(htmlAsString).querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe('/', () => {
  describe('POST', () => {
    it('creates a new quote', async () => {
      const quote = "The worst thing I can be is the same as everybody else";
      const author = "Arnold Schwarzenegger ";
      const source = "Unknown";

  const response = await request(app)
      .post('/')
      .type('form')
      .send({quote, author, source})

  assert.equal(response.status, 200);
  
  assert.include(parseTextFromHTML(response.text, '#quotes'), quote);
  assert.include(parseTextFromHTML(response.text, '#quotes'), author);
  assert.include(parseTextFromHTML(response.text, '#quotes'), source);
    });
  });
});
