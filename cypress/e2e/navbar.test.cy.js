/// <reference types="cypress" />

describe ('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')

    });

    it('Should display online bangking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h3').contains('Our Bank is trusted by over 1,000,000 customers world wide. Sign in now!')
        .should('be.visible')
    });
    
    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').contains('Feedback').should('be.visible')
        
        cy.get('#name')
        .type('fachrydan')
        .should('have.value','fachrydan')

        cy.get('#email')
        .type('fach@gmail.com')
        .should('have.value','fach@gmail.com')

        cy.get('#subject')
        .type('UI Website')
        .should('have.value','UI Website')

        cy.get('#comment')
        .type('test a random question')
        .should('have.value','test a random question')

        cy.get('input[name="submit"]').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        cy.get('strong').contains('Home').should('be.visible')
        cy.get('strong').contains('Online Banking').should('be.visible')
        cy.get('strong').contains('Feedback').should('be.visible')
        cy.get('#signin_button').should('be.visible')
        
    });

});