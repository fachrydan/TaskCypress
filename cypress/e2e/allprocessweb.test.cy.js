/// <reference types="cypress" />

describe ('Test All Process in Website Willy Wears', () => {
    it('Should try to login with Alert', () => {
        cy.visit('https://willywears.masuk.id/')

        cy.pause()

        cy.contains('Login').click()

        cy.fixture("userwilly").then(user=>{
            const username = user.usernameFake
            const password = user.passwordFake

            //AUTHENTICATION
            cy.get('#exampleInputEmail').clear()
            cy.get('#exampleInputEmail').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            //BUTTON
            cy.contains('Login').click()

            //ALERT
            cy.get('.text-danger').should('contain.text','The Username field is required.')

        })
    })

    it('Should try to login into Home Page and Checkout', () => {
        cy.visit('https://willywears.masuk.id/')

        cy.contains('Login').click()

        cy.fixture("userwilly").then(user=>{
            const username = user.username
            const password = user.password

            //AUTHENTICATION
            cy.get('#exampleInputEmail').clear()
            cy.get('#exampleInputEmail').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            //BUTTON
            cy.contains('Login').click()
            cy.url().should('include', 'index.php/Welcome')

            //PRODUCT PAGE
            cy.contains('Product').click()
            cy.url().should('include', 'Welcome/produk')
            cy.contains('Crewneck Guess LA Vintage').should('be.visible')
            cy.contains('Stok: 2').should('be.visible')
            
            //DETAIL PRODUCT PAGE
            cy.contains('Detail').click()
            cy.get('strong').contains('Size XL (Panjang 70 x lebar 64), Kondisi 95% mulus. No minus !')
            .should('be.visible')
            cy.contains('Rp 280.000').should('be.visible')
            
            //KERANJANG PAGE
            cy.contains('Buy Now').click()
            cy.url().should('include', 'index.php/produk/detail_keranjang')
            cy.contains('Crewneck Guess LA Vintage').should('be.visible')
            cy.contains('Payment').should('be.visible')
            
            //GO TO PAYMENT
            cy.contains('Payment').click()

            //FAKE CHECKOUT
            cy.get('button').contains('Chekout').click()
            cy.get('.text-danger').should('contain.text','The Name field is required.')
            cy.get('.text-danger').should('contain.text','The Address field is required.')
            cy.get('.text-danger').should('contain.text','The Phone number field is required.')
            cy.get('.text-danger').should('contain.text','The Select field is required.')
            
            //REAL CHECKOUT
            cy.get('input[name="nama"]').type('Fachry Ramadhan')
            .should('have.value','Fachry Ramadhan')

            cy.get('input[name="alamat"]').type('Jagakarsa')
            .should('have.value','Jagakarsa')

            cy.get('input[name="no_telp"]').type('0123987654')
            .should('have.value','0123987654')

            cy.get('select').select('BCA 12345678 an: willywears')
            .should('have.value','BCA 12345678 an: willywears')

            cy.get('button').contains('Chekout').click()

        })

    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
});