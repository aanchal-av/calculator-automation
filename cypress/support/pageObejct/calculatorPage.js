import { baseUrl } from "../../../cypress.json";

const calculatorPage = {
 
    launchApplication: () => cy.visit(baseUrl),
 
    logOutFromApplication: () => cy.contains('Log Out').click()
    
 
}
 
export default calculatorPage;