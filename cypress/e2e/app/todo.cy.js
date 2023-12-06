/// <reference types="cypress" />

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit("https://proyecto-react-avanzado-nu.vercel.app/")
    })

    it("displays eleven todo items by default", () => {
        cy.get("#tasks-table tbody tr").should("have.length", 11)

        cy.get("#tasks-table tbody tr")
            .last()
            .should("have.text", "Crear la página de inicio")
    })

    it("can add new todo items", () => {
        const nuevaTarea = "Crear los tests de Cypress"

        cy.get("#tasks-table tbody tr td input").type(nuevaTarea)
        cy.get("#create-task-button").click()
        cy.get("#tasks-table tbody tr").should("have.length", 12)
    })
})
