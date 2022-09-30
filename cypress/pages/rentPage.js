class rentPage {
    rentElements = {
        name: () => cy.get('#name'),
        lastName: () => cy.get('#last_name'),
        cardNumber: () => cy.get('#card_number'),
        email: () => cy.get('#email')
    }

    typeName(name) {
        this.rentElements.name().type(name);
    }

    typeLastName(lastName) {
        this.rentElements.lastName().type(lastName);
    }

    typeCardNumber(cardNumber) {
        this.rentElements.cardNumber().type(cardNumber);
    }

    typeEmail(email) {
        this.rentElements.email().type(email);
    }
}

module.exports = new rentPage();