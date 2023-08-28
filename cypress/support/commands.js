import 'cypress-iframe';


Cypress.Commands.add('iframe',(iframe)=>{

     return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)



})
