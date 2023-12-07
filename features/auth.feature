Feature: Authentication Route

  Scenario: Successful authentication
    Given the user has valid credentials
    When the user makes a GET request to "/auth" with their credentials
    Then the response should be "Authenticated" with a status code of "200"

  Scenario: Failed authentication with incorrect credentials
    Given the user has invalid credentials
    When the user makes a GET request to "/auth" with their credentials
    Then the response from the API should be "Unauthorized" with a status code of "401"
