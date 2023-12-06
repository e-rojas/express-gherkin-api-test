const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
const axios = require('axios');

let response;

When('a client makes a GET request to {string}', async function (path) {
  response = await axios.get(`http://localhost:3000${path}`);
});

Then('the response should be {string}', function (expectedResponse) {
  assert.equal(response.data, expectedResponse);
});
