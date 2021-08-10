import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { baseUrl } from "../../../cypress.json";
import calculatorPage from "../../support/pageObejct/calculatorPage";

Given(/^I launch the calculator application$/, () => {
  calculatorPage.launchApplication();
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

When(/^I enter "([^\"]*)" positive number$/, (positiveNumber) => {
  cy.get(".component-button")
    .should("be.visible")
    .contains(positiveNumber)
    .click();
});

And(/^I click "([^\"]*)" button$/, (buttonName) => {
  cy.get(".component-button").should("be.visible").contains(buttonName).click();
});

Then(/^I should see "([^\"]*)" in the display$/, (displayNumber) => {
  cy.get(".component-display").should("have.text", displayNumber);
});

When(/^I enter "([^\"]*)" negative number$/, (negativeNumber) => {
  negativeNumber.split("").forEach((individualNumber) => {
    cy.get(".component-button")
      .should("be.visible")
      .contains(individualNumber)
      .click();
  });
  cy.get(".component-button").should("be.visible").contains("+/-").click();
});
