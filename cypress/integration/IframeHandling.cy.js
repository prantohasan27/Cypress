import 'cypress-iframe'
describe('Iframe Handeling ', function(){

it('Approach1', function(){

    cy.visit("https://the-internet.herokuapp.com/iframe")
    let iframe = cy.get("#mce_0_ifr")
                   .its('0.contentDocument.body')
                   .should('be.visible')
                   .then(cy.wrap);

                   iframe.clear().type(" Pranto {ctrl+a}")
                   cy.get("[aria-label='Bold']").click();


})

it('Approach2 Custom Command', function(){


    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.iframe('#mce_0_ifr').clear().type(" Pranto")
    cy.get("[aria-label='Bold']").click();

})

it.only('Approach3 Cypress Iframe Plugin', function(){


    cy.visit("https://the-internet.herokuapp.com/iframe")

    cy.frameLoaded('#mce_0_ifr');
    cy.iframe('#mce_0_ifr').clear().type("PrantoIsTestingIframe {ctrl + a}")
    cy.get("[aria-label='Bold']").click();

})



})