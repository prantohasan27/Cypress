describe('Alerts in Cypress', function(){

    it('JS Alert', function(){
    
         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.get(".example > ul:nth-child(3) > li:nth-child(1) > button:nth-child(1)").click()
         cy.on('window:alert', function(p){
         expect(p).to.contains('I am a JS Alert')

         })

         cy.get("#result").should('have.text','You successfully clicked an alert')


    })

    // it('JS Confirm Alert', function(){
    
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.on('window:confirm', function(p){
    //     expect(p).to.contains('I am a JS Confirm')
    //     })

    //     cy.on('window:confirm', () => false)
    //     cy.get("#result").should('have.text','You clicked: Cancel')

    it('JS Prompt Alert', function(){
    
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

        cy.stub(win, 'prompt').returns('welcome')

    })


        cy.on('window:confirm', () => false)
        cy.get("button[onclick='jsConfirm()']").click()
        cy.get("#result").should('have.text','You clicked: Cancel')
           
    })

    it.only('JS Prompt Alert', function(){
    
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {

        auth:
        {
            username: "admin",
            password: "admin"
        }


        })

        cy.get(".div[class='example'] p").should('have.contain',"Congratulations")

           
    })




})