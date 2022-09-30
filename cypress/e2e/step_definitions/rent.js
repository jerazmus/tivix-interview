import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const rentPage = require('../../pages/rentPage');

Given('Current page is the rent page for a car with rent form', () => {
    cy.visit('/?country=3&city=4&model=&pickup=2022-10-10&dropoff=2022-10-17');
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
    cy.get('.btn-primary').click();
});

When('User types in the name {string}', (name) => {
    rentPage.typeName(name);
});

When('User types in the last name {string}', (lastName) => {
    rentPage.typeLastName(lastName);
});

When('User types in the card number {string}', (cardNumber) => {
    rentPage.typeCardNumber(cardNumber);
});

When('User types in the email {string}', (email) => {
    rentPage.typeEmail(email);
});

When('User clicks the \'Rent\' button on rent page', () => {
    cy.get('.btn-primary').click();
});

Then('Alert with message {string} is visible', (message) => {
    cy.get('.alert').contains(message);
})

Then('No alert is visible', () => {
    cy.get('.alert').should('not.exist');
})