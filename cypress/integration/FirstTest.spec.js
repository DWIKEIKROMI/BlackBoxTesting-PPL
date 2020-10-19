/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Dwike Ikromi P')
        cy.get('[placeholder ="Email"][type="text"]').type('Dwikeikromi1205@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid', () => {
        cy.get('#inputEmail1').type('Dwike Ikromi P')
        cy.get('#inputPassword2').type('abcdef')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('Dwike Ikromi P')
        cy.get('#exampleInputPassword1').type('abcdef')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels', () => {
        cy.get('[placeholder="Recipients"]').type('Dwike Ikromi P')
        cy.get('[placeholder="Subject"]').type('Tugas PPL BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Selamat Mengerjakan')
    })

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Dwike')
        cy.get('#inputLastName').type('Ikromi')
        cy.get('#inputEmail').type('Dwike Ikromi P')
        cy.get('#inputWebsite').type('www.wibusubs.com')
    })

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('Dwike Ikromi P')
        cy.get('#inputPassword3').type('abcdef')
        cy.get('.custom-checkbox').last().click()
    })

});