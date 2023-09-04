describe('Custom Commands Related Tasks', function(){

it('Handling Links', function(){


    cy.visit("https://demo.nopcommerce.com/");

    cy.clickLink("Apple MacBook Pro 13-inch")
    cy.get("div[class = 'product-name'] h1").should('have.text','Apple Macbook Pro 13-inch')


})

it.only('Login Command',function(){

    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in")
    cy.loginapp("pranto@gmail.com","pranto123")

})

    
})