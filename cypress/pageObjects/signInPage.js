class SignInPage{
    
    navToSignInPage() {
        return cy.visit('https://app.takecommandhealth.com/sign-in?next=/member-portal');
    }

    emailTxt() {
        return cy.get('#session_email');
    }

    passwordTxt() {
        return cy.get('#session_password')
    }

    signInBtn() {
        return cy.get('.btn-primary');
    }

    signInDisabledBtn() {
        return cy.get('.button.btn.btn-primary.disabled');
    }
}
export default SignInPage;