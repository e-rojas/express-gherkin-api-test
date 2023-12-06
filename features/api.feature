Feature: API Endpoints

  Scenario: Client makes a GET request to the root
    When a client makes a GET request to "/"
    Then the response should be "Hello World!"
