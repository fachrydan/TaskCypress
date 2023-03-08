/// <reference types="cypress" />

describe ('Login/Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('fake username')
        cy.get('#user_password').type('fake password')
        cy.get('input[name="submit"]').click()

        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('Should display error message', () => {

    });

    it('Should login to application with valid data', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password
        
        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)
        cy.get('#user_password').clear()
        cy.get('#user_password').type(password)
        cy.get('input[name="submit"]').click()

        cy.get('h2').should('contain.text', 'Cash Accounts')

        })
    })

    it('Should logout from the application', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })

        cy.contains('username').click()
        //ASSERTION LOGOUT
        cy.get('#logout_link').should('be.visible')
        cy.get('#logout_link').should('have.text', 'Logout')
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
    });

});