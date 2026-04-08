/// <reference types="cypress"/>
describe("title example:check log in",()=>{
    it("validate the the user can login successfuly with valid email and pass",()=>{
        cy.visit("/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
       // cy.get("[name=login-button]").click()
        cy.contains("Login").click()
       //y.contains("h4","user")
      //cy.contains("Sauce Labs Backpack")
      //cy.contains("div","Sauce Labs Backpack")
      cy.get("#react-burger-menu-btn").click()
      cy.get(".menu-item").first()
      cy.get(".menu-item").last()
      cy.get(".menu-item").eq(0)
      cy.get(".menu-item").eq(2)
      cy.get(".menu-item").eq(2).prev()
      cy.get(".menu-item").first().next
      cy.get("a").filter(".menu-item")
      cy.get("a").not(".menu-item")
      cy.get(".inventory_item_price").first().parent()
      cy.get(".pricebar").first().find("button").click()
      cy.get(".inventory_item_price").first().parents(".inventory_item")
      cy.get(".inventory_item_price").first().parents()
      cy.get(".inventory_item_price").first().parent(".pricebar")
      cy.get("inventory_item_price").first().children()
      


    })
    //     it("validate that rhe user cant log in with notemail vaild and password",()=>{

    // // })
})
// عملنا baseurl : هاظ بعمل انه اذا عنا اكثر من لينك منروح على ملف cypress.config ومنكتب baseurl ومنحط اللينك بداله  ,ومنحط هون بدل اللينك علامة سلاش