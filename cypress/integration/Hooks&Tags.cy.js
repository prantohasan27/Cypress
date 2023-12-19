describe('Testing Hooks and Tags', function(){


    before('Before Launching the app', function(){


        cy.log('Open the app')


    })

    after('After Launching the app', function(){


        cy.log('close the app')


    })
    
    it('Search Function', function(){


        cy.log("************Searching*************")
    })

    it('Advanced Serach Function', function(){


        cy.log("***************Advanced Searching**********")
    })

    it('Listing Products', function(){


        cy.log("***************Listing Products**********")
    })

})