/// <reference types="cypress" />
describe("Lesson 2", () => {
  it("get Demos text", () => {
    cy.visit("https://www.telerik.com/support/demos") // 
    cy.contains("h1","Demo")
    cy.contains("Reporting & Docs").click()
    cy.get("[title=Search]")
    cy.get("#mobile")
    cy.get('[title="Download on the App Store"]')
    cy.get("[alt=App-Store-Icon]")
    cy.get(".TK-Footer-List").first().children()

  })
})