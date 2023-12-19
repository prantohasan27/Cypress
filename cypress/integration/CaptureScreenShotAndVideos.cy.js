import { WatchDirectoryFlags } from "typescript"

describe('My test suites',function(){


    it('Capture Screenshot & Videos', function(){

        cy.visit("https://demo.opencart.com/")
        cy.screenshot("pranto1")

        //check log Screenshot

        cy.wait(3000)
        cy.get("#logo > a:nth-child(1) > img:nth-child(1)").screenshot("logo")

    })
    it.only('Automatically Capture Screenshot & Videos', function(){



        cy.visit("https://demo.opencart.com/")
    
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Phones")



    })




})