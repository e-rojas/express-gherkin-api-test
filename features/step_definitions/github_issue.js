const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
const axios = require('axios');
let response;

Given('I am an anonymous user', async () => {
    // this requires no action as user is anonymous
});
When('I rquest a list of issues for the {string} repository', async (repositoryName) => {
    const url = `https://api.github.com/repos/${repositoryName}/${repositoryName}/issues`
    response = await axios.get(url);
    assert.equal(response.status, 200, `Expected status code 200, but got ${response.status}`);
});
Then('I should find at least {string} result', async (requestResult) => {
    const expectMinIssue = parseInt(requestResult, 10);
    assert(response.data.length >= expectMinIssue,`Expected at least ${expectMinIssue} issues, but found ${response.data.length}` );
});