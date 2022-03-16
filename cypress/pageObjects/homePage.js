class HomePage{
    
    navToHomepage() {
        return cy.visit('https://www.takecommandhealth.com');
    }

    logoImg() {
        return cy.get('.c-main-nav__logo');
    }

    signInBtn() {
        return cy.get('.c-main-nav__sign-in')
    }

    acceptCookiesBtn() {
        return cy.get('#hs-eu-confirmation-button');
        }

    signInBtn() {
        return cy.get('.c-main-nav__sign-in');
    }
}
export default HomePage;