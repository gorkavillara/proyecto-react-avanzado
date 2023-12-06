/// <reference types="cypress" />

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit("https://proyecto-react-avanzado-nu.vercel.app/")
    })

    it("displays eleven todo items by default", () => {
        cy.get("#tasks-table tbody tr").should("have.length", 11)

        cy.get("#tasks-table tbody tr")
            .last()
            .should("have.text", "Diseñar la página de configuración")
    })

    it("can add new todo items", () => {
        const newItem = "Feed the cat"

        cy.get("#tasks-table tbody tr td input").type(`${newItem}{enter}`)
        cy.get("#tasks-table tbody tr").should("have.length", 12)
    })
})
