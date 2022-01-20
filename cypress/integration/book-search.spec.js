// book-search.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import { iteratee } from "lodash"

describe("New Application - OpenLibrary API Search", () => {
  it("Searches for The Great Gatsby", () => {
    cy.visit("http://localhost:3000/");
    cy.get("label[for='bookSearch']").click().get("input[name='bookSearch']").type("The Great Gatsby");
  })
  it("Searches for The Great Gatsby and Sorts by Title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("label[for='bookSearch']").click().get("input[name='bookSearch']").type("The Great Gatsby");
    cy.get("th").contains("Title").click();
    cy.get("th").contains("Title").click();
  })
  it("Searches for The Great Gatsby and Sorts by Published Date", () => {
    cy.visit("http://localhost:3000/");
    cy.get("label[for='bookSearch']").click().get("input[name='bookSearch']").type("The Great Gatsby");
    cy.get("th").contains("Published Date").click();
    cy.get("th").contains("Published Date").click();
  })
  it("Searches for The Great Gatsby and Sorts by Published Date then Title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("label[for='bookSearch']").click().get("input[name='bookSearch']").type("The Great Gatsby");
    cy.get("th").contains("Published Date").click();
    cy.get("th").contains("Title").click();
  })
})