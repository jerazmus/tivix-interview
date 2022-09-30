import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const searchPage = require('../../pages/searchPage');

Given('Current page is the Tivix QA Lab home page', () => {
    cy.visit('/');
});

When('User chooses country {string}, city {string}, model {string}, pick-up {string} and drop-off {string} dates', (country, city, model, pickUpDate, dropOffDate) => {
    searchPage.chooseCountry(country);
    searchPage.chooseCity(city);
    searchPage.typeModel(model);
    searchPage.typePickUpDate(pickUpDate);
    searchPage.typeDropOffDate(dropOffDate);
});

When('User clicks the \'Search\' button', () => {
    cy.get('form').submit()
    cy.scrollTo(0, 0);
    searchPage.getCompany();
    searchPage.getLicense();
    searchPage.getPricePerDay();
    console.log(searchPage.details);
});

When('User clicks the \'Rent\' button on first search result', () => {
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
});



