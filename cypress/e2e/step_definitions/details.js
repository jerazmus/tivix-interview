import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const detailsPage = require('../../pages/detailsPage');
const searchPage = require('../../pages/searchPage');

When('User clicks the \'Rent!\' button on details page', () => {
    detailsPage.rent();
});

Then('The page will display correct car details', () => {
    detailsPage.detailsElements.model().contains(searchPage.details[2]);
    detailsPage.detailsElements.company().contains(searchPage.details[5]);
    detailsPage.detailsElements.pricePerDay().contains(searchPage.details[7]);
    detailsPage.detailsElements.location().contains(searchPage.details[0]+', '+searchPage.details[1]);
    detailsPage.detailsElements.licence().contains(searchPage.details[6])
    detailsPage.detailsElements.pickUpDate().contains(searchPage.details[3]);
    detailsPage.detailsElements.dropOffDate().contains(searchPage.details[4]);
})