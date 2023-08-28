export class LoginPage {

    navigate(){

    cy.visit('http://staging.egp.gov.bt/')
    }
    enterusername(){
    cy.get('#txtEmailId').type('dtecdrive@gmail.com')
    }

    enterpassword(){
        cy.get('#txtPassword').type('egp12345')

    }

    clickLogin(){
        cy.get('#btnLogin').click()
    }
}