/// <reference types="cypress" />

describe('Searchbox Test', function(){

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should type into searchbox and submit', () => {
        cy.get ('#searchTerm').type('Online {enter}')

        cy.get ('h2').should('contain.text', 'Search Results:')
    })
    it('Should show search result page "online"', () => {
        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online')
        //cy.get('#signin_button').click()
        
        cy.get ('h2').should('contain.text', 'Search Results:')

        cy.get ('a').should('contain.text', 'Free Access to Online Banking')
        cy.get ('a').should('contain.text', 'Online Statements')
    
    })
});