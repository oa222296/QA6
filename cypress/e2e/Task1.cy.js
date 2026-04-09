const { multiply } = require("lodash");

describe('Task demo',() =>{
    it ('Click command',()=>{
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get('img[alt="Tricentis Demo Web Shop"]')
        cy.get('[name="q"]')
        cy.get("#register-button").click();
        cy.get("#newsletter-subscribe-button").click();
        cy.contains("Manufacturers");
        cy.get("#gender-male").click();
        cy.get('.my-account h3');
        cy.get('.inactive').eq(6);
        cy.contains('a', 'Jewelry')
        cy.get('.inputs').eq(3)
        cy.contains('h1','Register')
        cy.contains('a','Contact us')
        cy.contains('a','Log in').click()





    })

})
