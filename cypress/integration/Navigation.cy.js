describe('Navigation Scneario', function(){


    it('First Navigation', function(){


        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq',"Your Store")

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click()

        //Going Back to home page
        cy.go('back').title().should('eq',"Your Store")

        //Going Forward
        cy.go('forward')

        // You can do it by using (-1) for backwards or (1) for forwards
        cy.go(-1)
        cy.go(1)

    })


})