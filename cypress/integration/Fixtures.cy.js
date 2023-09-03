

describe('Fixture File Testing',function(){


    it.only('FixtureDemoTest',function(){


        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture('orangehrm').then(function(data){


            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type ='submit'").click();
          

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected)

        })




    })

    it('FixtureDemoTest', function(){




    })



})