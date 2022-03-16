import HomePage from '../pageObjects/homePage';
const homePage = new HomePage();
import SignInPage from '../pageObjects/signInPage';
const signInPage = new SignInPage();

describe('Story TC-0001 - nav home - clear cookies - verf header - verf sign in elements', () => {  
    
    it('should nav to home page',() => {
        homePage.navToHomepage();
    });

    it('should clear cookies modal',() => {
        homePage.acceptCookiesBtn()
        .contains('Accept')
        .click({force: true});
    });
    
    it('verify header element', () => {
        homePage.logoImg()
        .should('be.visible');
    });
    
    it ('click sign in button', () => {
        homePage.signInBtn()
        .contains('Sign In')
        .click();
    });

    it ('verf and enter email', () => {
        signInPage.emailTxt()
        .type('userStub@gmail.com');
    });

    it ('type weak password', () => {
        signInPage.passwordTxt()
        .type('~');
    });

    it ('validate button is disabled with weak password', () => {
        signInPage.signInDisabledBtn().should('be.visible')
    })
})