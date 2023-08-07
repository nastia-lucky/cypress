describe('Onliner tests', () => {

  const login = "klepatskayanastia@gmail.com";
  const password = "nastusha1213";
  const incorrectLogin = "klepatskafvcfgvgvgyanastia@gmail.com";
  const incorrectPassword = "nastushbhbha1213";

  it('Open Catalog', () => {
    cy.openOnliner();
    cy.get('span[class="b-main-navigation__text"]').first().click();
    cy.get('ul[class="catalog-navigation-classifier "]').should("be.visible");
  })


  it('Check user can sign in to onliner', () => {
    cy.openOnliner();
    cy.signInToOnliner(login, password);
    cy.get("div[class='auth-form__body']").should("not.be.visible");
  })

  it('Check correct message appears upon inputting not correct credentioals', () => {
    cy.openOnliner();
    cy.signInToOnliner(incorrectLogin, incorrectPassword);
    cy.get("div[class^='auth-form__description auth-form__description_error']").should("be.visible");
  })

  it('Check correct message appears if user did not provide password', () => {
    cy.openOnliner();
    cy.clickSignInButton();
    cy.inputEmail(login);
    cy.clickSubmitButton();
    cy.get("div[class^='auth-form__description auth-form__description_error']").should("be.visible");
  })

  it('Check user can send forgot password form', () => {
    cy.openOnliner();
    cy.clickSignInButton();
    cy.get("a[href$='recover-password']").click();
    cy.get("input[placeholder='Ник, e-mail или номер телефона']").type(login);
    cy.clickSubmitButton();
    cy.get("form[novalidate]").should("not.be.visible");

  })


})