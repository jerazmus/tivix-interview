Feature: Car details page

    Feature car details page will check if the details of the selected car and the rental dates are the same as on search result page.

    Background:
        Given Current page is the Tivix QA Lab home page
    Scenario: Correct details
        When User chooses country "Poland", city "Wroclaw", model "Toyota RAV4", pick-up "2022-10-10" and drop-off "2022-10-17" dates
        And User clicks the 'Search' button
        And User clicks the 'Rent' button on first search result
        Then The page will display correct car details