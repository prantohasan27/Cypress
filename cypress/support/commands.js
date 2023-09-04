import 'cypress-iframe';


Cypress.Commands.add('iframe',(iframe)=>{

     return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

})

// Custom command for cliking on the link

Cypress.Commands.add('clickLink', function(label){

    cy.get('a').contains(label).click();
})

//Overwrite Contains()

Cypress.Commands.overwrite('contains',function(orignalFn,subject, filter,text, options = {}){


    if(typeof text == 'object')
    {
        options = text
        text = filter
        filter = undefined
    }

    options.matchCase = false
    return orignalFn(subject,filter,text,options)

})

Cypress.Commands.add("loginapp", function(email,password){

    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get("button[class='button-1 login-button']").click()

})
