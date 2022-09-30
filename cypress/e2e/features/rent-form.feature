Feature: Rent form validation

    Rent form validation will check if validation for rent information works correctly.

    Background:
        Given Current page is the rent page for a car with rent form
    Scenario: Empty name or last name
        And User types in the card number "1111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then Alert with message "Name is required" is visible
        And Alert with message "Last name is required" is visible
    Scenario: Too long name or last name
        And User types in the name "testtesttesttesttesttesttestesttesttesttesttesttest"
        And User types in the last name "testtesttesttesttesttesttestesttesttesttesttesttest"
        And User types in the card number "1111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then Alert with message "Name value is too long" is visible
        And Alert with message "Name value is too long" is visible
    Scenario: Correct name and last name
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then No alert is visible
    Scenario: Empty card number
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Card number is required' is visible
    Scenario: Too long card number
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "11111111111111111111111111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Card number value is too long' is visible
     Scenario: Wrong characters in card number
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "-22"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Card number contains wrong chars' is visible
    Scenario: Correct card number
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then No alert is visible
    Scenario: Empty email
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Email is required' is visible
    Scenario: Too long email
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User types in the email "testtesttesttesttesttesttestesttesttesttesttesttes@"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Email value is too long' is visible
    Scenario: Invalid email
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User types in the email "test"
        And User clicks the 'Rent' button on rent page
        Then Alert with message 'Please provide valid email' is visible
    Scenario: Correct email
        And User types in the name "test"
        And User types in the last name "test"
        And User types in the card number "1111"
        And User types in the email "test@test.com"
        And User clicks the 'Rent' button on rent page
        Then No alert is visible