import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe("Mouse Actions in Cypress", function(){

it('Mouse Hover Action', function(){

    cy.visit("https://demo.opencart.com/")
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
    cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible')

})

it('Right Click on Mouse', function(){

cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
cy.get('.context-menu-icon-copy > span').should('be.visible')

})

it('Double Click on Mouse', function(){

    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded('#iframeResult')
    cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
    cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')



})

it('Drag & Drop on Mouse using Plugin', function(){

cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
cy.wait(5000)
cy.get('#box6').drag('box106',{force:true})

})

it.only('Scrolling Page on Mouse', function(){

    cy.visit('https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/')
    cy.get(':nth-child(8) > [style="font-weight: bold; font-size:15px; text-align:left"] > a').scrollIntoView({duration:3000})
    cy.get(':nth-child(8) > [style="font-weight: bold; font-size:15px; text-align:left"] > a').should('be.visible')



})





})