Feature: Github list of issues

    Scenario: I want to get alist of the issues for the Symfony repository
        Given I am an anonymous user
        When I rquest a list of issues for the Sympony repository
        Then I should find at least one result
