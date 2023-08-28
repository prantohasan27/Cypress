/// <reference types="Cypress" />

describe("check UI element", function(){

it('Checking Radio Buttons', function(){


cy.visit("https://itera-qa.azurewebsites.net/home/automation")
cy.get("input#monday").should('be.visible')
cy.get("input#female").should('be.visible')

//radio button select 

//cy.get('input#monday').check().should('be.checked')
cy.get('input.form-check-input[type = checkbox]').check().should('be.checked')

})




})