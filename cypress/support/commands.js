// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()

})

Cypress.Commands.add('loginFake', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type("usernameFake")

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type("passwordFake")

    cy.get('input[name="submit"]').click()

})


Cypress.Commands.add('fillPayBills', (amount, date, desc) => {
   
   //SELECT PAYMENT & ACCOUNT
   cy.get('select').eq(0).select('bofa')
   cy.get('select').eq(1).select('5')

   //INPUT AMOUNT
   cy.get('#sp_amount').clear()
   cy.get('#sp_amount').type(amount)

   //INPUT DATE PICKER
   cy.get('#sp_date').clear()
   cy.get('#sp_date').type(date)

   //INPUT DESCRIPTION
   cy.get('#sp_description')
   .type(desc, {force: true})

})