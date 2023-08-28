import { find } from "cypress/types/lodash"

describe('Table Checking', function(){

    beforeEach('Login',()=>{


        cy.visit("https://demo.opencart.com/admin/")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type ='submit']").click()
        cy.get(".btn-close").click()
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()

    })

    it('Check Number of Rows and column',function(){


        cy.get("table[class = 'table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class = 'table table-bordered table-hover']>thead>tr>td").should('have.length','7')

    })
    it('check cell data from specific rows and column', function(){

     cy.get("table[class = 'table table-bordered table-hover']>tbody>tr:nth-child(6)").contains("xvrt@test.com")


    })

    it('Read all the rows and colums data in the first page', function(){


        cy.get("table[class = 'table table-bordered table-hover']>tbody>tr")
          .each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })


          })



    })

    it.only('pagination',function(){


        let TotalPages;
        cy.get(".col-sm-6.text-end").then(function(p){
            let findText = p.text()
            TotalPages = findText.substring(findText.indexOf("(")+1,findText.indexOf("Pages")-1)
            cy.log("Total number of pages in a table =======>"+TotalPages);
        })
    })






})