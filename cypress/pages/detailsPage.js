class detailsPage {
    detailsElements = {
        model: () => cy.get('.card-header'),
        company: () => cy.get('.card-title'),
        pricePerDay: () => cy.get('.card-body > .card-text').eq(0),
        location: () => cy.get('.card-body > .card-text').eq(1),
        licence: () => cy.get('.card-body > .card-text').eq(2),
        pickUpDate: () => cy.get('.card-body > h6').eq(0),
        dropOffDate: () => cy.get('.card-body > h6').eq(1),
    }
}

module.exports = new detailsPage()