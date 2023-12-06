const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;
const axios = require('axios');
const url = 'https://api.github.com/repos/symfony/symfony/issues';
let response;
Given('I am an anonymous user', async () => {
    // this requires no action as user is anonymous
});
When('I rquest a list of issues for the Sympony repository', async () => {
    response = await axios.get(url);
});
Then('I should find at least one result', async () => {
    console.log(response.data.length);
    assert(response.data.length > 0, 'No issues were found');
});