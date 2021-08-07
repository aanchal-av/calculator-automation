import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { baseUrl } from "../../../cypress.json";

Given(/^I launch the calculator application$/, () => {
  cy.visit(baseUrl);
});

Then(
  /^The result should be "([^\"]*)" to "([^\"]*)"$/,
  (equalOperator, result) => {
    cy.get(".component-button.orange")
      .should("be.visible")
      .contains(equalOperator)
      .click();
    cy.get(".component-display").then(() => {
      cy.get(".component-display").should("have.text", result);
    });
  }
);

When(/^I perform "([^\"]*)" operation$/, (arithemticOps) => {
  cy.get(".component-button.orange")
    .should("be.visible")
    .contains(arithemticOps)
    .click();
});

When(/^I enter "([^\"]*)" positive number$/, (positiveNumber) => {
  cy.get(".component-button")
    .should("be.visible")
    .contains(positiveNumber)
    .click();
});
