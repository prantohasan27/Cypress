describe('Handle Dropdown', function(){

it('DropDownWithSelect',function(){

cy.visit('https://www.zoho.com/commerce/free-demo.html')

cy.get('#zcf_address_country').select("United States")

cy.get('#globalstatecode valid').select("alabama")


})

it('DropDown Without Select', function(){

cy.visit('www.dummyticket.com/dummy-ticket-for-visa-application/')
cy.get("#select2-billing_country-container").click()
cy.get('.select2-search__field').type('Japan').type('{enter}')
cy.get('#select2-billing_country-container')
  .should('have.text','Japan')


})

it('Auto Suggested DropDown', function(){

cy.visit('www.wikipedia.org/')
cy.get('#searchInput').type('Delhi')
cy.get('.suggestion-title').contains('Delhi University').click()



})

it('Dynamic DropDown', function(){

cy.visit('https://www.google.com/')
cy.get("input[name = 'q']").type('Cypress Automation')
cy.get('div.wM6W7d>span').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === 'Cypress Automation Tool') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    }
                                                     })

})




})