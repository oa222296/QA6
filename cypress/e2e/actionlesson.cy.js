const { multiply } = require("lodash");

describe('Action lesson',() =>{
    it ('Click command',()=>{
        cy.visit("http://127.0.0.1:5500/actionsLesson.html");
        cy.get("#btn1").click()
        cy.get("#btn2").click("top")
        cy.get(".btn").click({multiple:true})
        cy.get("#btn0").click({force:true})



    });
    it('type command',()=>{
        cy.visit("http://127.0.0.1:5500/actionsLesson.html");
        cy.get("[placeholder='Type your name']").type("Omar{home}")
        cy.get(".footer_copy").type("{pageDown}")
        cy.get("#myTextField").type("{pageUp")
        cy.get("#input_0").type("test",{force:true,delay:1000})
        


    });
    IT('SELECT COMMAND'),()=>{
        cy.visit("http://127.0.0.1:5500/actionsLesson.html")
        cy.get("#country").select("jordan")//select by visible text
        cy.get("#country").select("egypt_country")//select by value
        cy.get("#country").select(0)//select bu index



    }


})