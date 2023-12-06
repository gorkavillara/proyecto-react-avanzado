/// <reference types="cypress" />

describe("Pantalla de tareas", () => {
    beforeEach(() => {
        // cy.visit("http://localhost:3000")
        cy.visit("https://proyecto-react-avanzado-nu.vercel.app/")
    })

    it("displays eleven todo items by default", () => {
        cy.get("#tasks-table tbody tr").should("have.length", 11)

        cy.get("#tasks-table tbody tr")
            .last()
            .find("td")
            .first()
            .should("have.text", "Diseñar la página de configuración")
    })

    it("Puede añadir tareas nuevas", () => {
        const nuevaTarea = "Crear los tests de Cypress"

        cy.get("#tasks-table tbody tr td input").type(nuevaTarea)

        cy.get('#user-select').select('anaperez')

        cy.get("#create-task-button").click()
        cy.get("#tasks-table tbody tr").should("have.length", 12)
    })
})
