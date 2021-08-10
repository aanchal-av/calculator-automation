import { When, Then } from "cypress-cucumber-preprocessor/steps";

When(/^I perform "([^\"]*)" operation$/, (arithemticOps) => {
  cy.get(".component-button.orange")
    .should("be.visible")
    .contains(arithemticOps)
    .click();
});

When(
  /^I perform "([^\"]*)" operation on two "([^\"]*)" and "([^\"]*)" positive numbers$/,
  (arithemticOps, firstNumber, secondNumber) => {
    firstNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
    cy.get(".component-button.orange")
      .should("be.visible")
      .contains(arithemticOps)
      .click();

    secondNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
  }
);

When(
  /^I perform "([^\"]*)" operation on two "([^\"]*)" and "([^\"]*)" negative numbers$/,
  (arithemticOps, firstNumber, secondNumber) => {
    firstNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
    cy.get(".component-button").should("be.visible").contains("+/-").click();
    cy.get(".component-button.orange")
      .should("be.visible")
      .contains(arithemticOps)
      .click();
    secondNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
    cy.get(".component-button").should("be.visible").contains("+/-").click();
  }
);

When(
  /^I perform "([^\"]*)" operation on one positive "([^\"]*)" and one negative "([^\"]*)" number$/,
  (arithemticOps, firstNumber, secondNumber) => {
    firstNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
    cy.get(".component-button.orange")
      .should("be.visible")
      .contains(arithemticOps)
      .click();
    secondNumber.split("").forEach((individualNumber) => {
      cy.get(".component-button")
        .should("be.visible")
        .contains(individualNumber)
        .click();
    });
    cy.get(".component-button").should("be.visible").contains("+/-").click();
  }
);
