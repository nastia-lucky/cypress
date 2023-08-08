declare namespace Cypress {
    interface Chainable {
        openOnliner(): Chainable<JQuery<HTMLElement>>,
        clickSignInButton(): Chainable<JQuery<HTMLElement>>, 
        clickSubmitButton(): Chainable<JQuery<HTMLElement>>, 
        signInToOnliner(login:string, password:string ): Chainable<JQuery<HTMLElement>>, 
        inputEmail(login:string): Chainable<JQuery<HTMLElement>>, 
        inputPassword(pasword:string): Chainable<JQuery<HTMLElement>>, 
        checkErrorMessageAppears(): Chainable<JQuery<HTMLElement>>
    }
}