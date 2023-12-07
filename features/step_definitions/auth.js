require('dotenv').config();
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
const axios = require('axios');
let validUser = process.env.VALID_USERNAME;
let validPassword = process.env.VALID_PASSWORD;
let response;
Given('the user has valid credentials', function () {
    assert.ok(validUser);
    assert.ok(validPassword);
});
When('the user makes a GET request to {string} with their credentials', async function (path) {
    const url = `http://localhost:${process.env.PORT}${path}`;
    try {
        response = await axios.get(url, { params: { username: validUser, password: validPassword } });
    } catch (err) {
        response = err.response;
    }
});
Then('the response should be "Authenticated" with a status code of {string}', function (expectedStatusCode) {
    assert.equal(response.status.toString(), expectedStatusCode, `Expected status code: ${expectedStatusCode} Actual status code: ${response.status}`);
    assert.equal(response.data, 'Authenticated', `Expected response: Authenticated Actual response: ${response.data}`);
});

/* 
  Scenario: Failed authentication with incorrect credentials
    Given the user has invalid credentials
    When the user makes a GET request to "/auth" with their credentials
    Then the response should be "Unauthorized" with a status code of 401

*/

Given('the user has invalid credentials', function () {
    validUser = 'XXXXXXX';
    validPassword = 'XXXXXXX';
    assert.ok(validUser);
    assert.ok(validPassword);
})
When('the user makes a GET request to "{string}" with their credentials', async function (path) {
    const url = `http://localhost:${process.env.PORT}${path}`;
    try {
        response = await axios.get(url, { params: { username: validUser, password: validPassword } });
    } catch (err) {
        response = err.response;
    }
});
Then('the response from the API should be {string} with a status code of {string}', function (expectedResponse,expectedStatusCode) {
    assert.equal(response.status.toString(), expectedStatusCode, `Expected status code: 401 Actual status code: ${response.status}`);
    assert.equal(response.data, expectedResponse, `Expected response: Unauthorized Actual response: ${response.data}`);
});