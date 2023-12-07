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
});
Then('I should find at least {string} result', async (requestResult) => {
    console.log(response.data.length);
    assert(response.data.length > requestResult, 'No issues were found');
});