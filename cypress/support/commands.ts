/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('openOnliner', () => {
    cy.visit('https://www.onliner.by/');
})

Cypress.Commands.add('clickSignInButton', () => {
    cy.get("div[class='auth-bar__item auth-bar__item--text']").click();
})

Cypress.Commands.add('clickSubmitButton', () => {
    cy.get("button[class^='auth']").click();

})

Cypress.Commands.add('inputEmail', (login: string) => {
    cy.get("input[placeholder='Ник или e-mail']").type(login);
})

Cypress.Commands.add('inputPassword', (password: string) => {
    cy.get("input[type='password']").type(password);

})

Cypress.Commands.add('signInToOnliner', (login, password) => {
    cy.clickSignInButton();
    cy.inputEmail(login);
    cy.inputPassword(password);
    cy.clickSubmitButton();
})

Cypress.Commands.add('checkErrorMessageAppears', () => {
    cy.get("div[class^='auth-form__description auth-form__description_error']").should("be.visible");
})



