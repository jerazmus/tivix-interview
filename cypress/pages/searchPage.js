class homePage {
    searchFormElements = {
        country: () =>  cy.get('#country'),
        city: () => cy.get('#city'),
        model: () => cy.get('#model'),
        pickUpDate: () => cy.get('#pickup'),
        dropOffDate: () => cy.get('#dropoff')
    };

    details = []

    chooseCountry(country) {
        this.searchFormElements.country().select(country);
        this.details.push(country);
    }

    chooseCity(city) {
        this.searchFormElements.city().select(city);
        this.details.push(city);
    }

    typeModel(model) {
        this.searchFormElements.model().type(model);
        this.details.push(model);
    }

    typePickUpDate(date) {
        this.searchFormElements.pickUpDate().type(date);
        this.details.push(date);
    }

    typeDropOffDate(date) {
        this.searchFormElements.dropOffDate().type(date);
        this.details.push(date);
    }

    getCompany() {
        cy.get('tbody > :nth-child(1) > :nth-child(2)').then(($company) => {
            const company = $company.text();
            this.details.push(company);
        })
    }

    getLicense() {
        cy.get('tbody > :nth-child(1) > :nth-child(4)').then(($license) => {
            const license = $license.text();
            this.details.push(license);
        });
    }

    getPricePerDay() {
        cy.get('tbody > :nth-child(1) > :nth-child(6)').then(($pricePerDay) => {
            const pricePerDay = $pricePerDay.text();
            this.details.push(pricePerDay);
        });
    }
}

module.exports = new homePage() 