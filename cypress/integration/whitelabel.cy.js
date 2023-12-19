
import 'cypress-iframe'
describe('WhateLabelMD Automation Testing', function () {

    it('SnappyScripts Checking', function () {

        cy.visit("https://snappyscripts.com/")
        cy.wait(3000)
        cy.get('.banner_left > .button_box > .common_btn').click()
        cy.wait(3000)
        cy.get('[href="/collections/erectile-dysfunction"] > .treatment_col > h3').click()
        cy.wait(1500)
        cy.get('.hide-mob > .inner_order_btn').click()


    })

    it.only('ProrityMeds Checking', function () {

        cy.visit("https://prioritymeds.com/")
        cy.wait(1000)
        cy.get('#brxe-ffqnvn > #brxe-chphcf > #brxe-tosprc > #brxe-rocald > #brxe-ehtwnp').click({ force: true })
        cy.get('#myBtn-mdl').click()

        //Iframe starts Now

        // Registering a custom Cypress command
        Cypress.Commands.add('getIframeBody', () => {
            return cy
                .get('#233165941642861')
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then(cy.wrap);
        });

        // Usage of the custom command
        cy.getIframeBody().find('#form-pagebreak-next_218').should('be.visible').click();

        // Interact with the select element inside the iframe
        cy.getIframeBody().then(iframeBody => {


            // Interact with the specific select element with ID 'input_230'
            cy.wrap(iframeBody).find('select#input_230').select('California (CA)').should('have.value', 'California (CA)');
            cy.wrap(iframeBody).find('#form-pagebreak-next_217').click()
            cy.wrap(iframeBody).find('#first_233').type('MD PRANTO')
            cy.wrap(iframeBody).find('#last_233').type('Hassan')
            cy.wrap(iframeBody).find('#form-pagebreak-next_214').click()
            cy.wrap(iframeBody).find('#input_234').type('prantohasandu27@gmail.com')
            cy.wrap(iframeBody).find('#label_input_235_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_219').click()
            cy.wrap(iframeBody).find('#input_236_full').type('8796542345')

            // both checkbox checked or uncheckd
            //cy.wrap(iframeBody).find('#label_input_237_0').should('be.checked')
            cy.wrap(iframeBody).find('#label_input_237_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_238_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_213').click()

            //Select Month, day, Year
            cy.wrap(iframeBody).find('select#input_99_month').select('November').should('have.value', '11');
            cy.wrap(iframeBody).find('select#input_99_day').select('30').should('have.value', '30');
            cy.wrap(iframeBody).find('select#input_99_year').select('1996').should('have.value', '1996');
            cy.wrap(iframeBody).find('#form-pagebreak-next_205').click()

            //Select Gender
            //cy.wrap(iframeBody.find('select#input_5').select('Male').should('have.value', 'Male').should('not.be.checked')
            cy.wrap(iframeBody).find('select#input_5').select('Female').should('have.value', 'Female');
            cy.wrap(iframeBody).find('#form-pagebreak-next_203').click()

            //Select Prescription Type (Yes/No?)
            cy.wrap(iframeBody).find('#label_input_100_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_100_0').click()
            cy.wrap(iframeBody).find('#input_101').type('Yes, I have taken prescription')
            cy.wrap(iframeBody).find('#form-pagebreak-next_17').click()

            //Please select a reason for today's visit (check all that apply)

            // Use a for loop to interact with checkboxes with recurrent IDs
            for (let i = 0; i < 5; i++) {

                // Construct the dynamic checkbox ID
                const checkboxId = `input_105_${i}`;

                // Check the checkbox by targeting the checkbox input within the label
                cy.wrap(iframeBody).find(`#label_${checkboxId}`).click()

                if (i == 3) {
                    cy.wrap(iframeBody).find('#input_106').type('Yes I have taken Suisdix')
                }
                else if (i == 4) {
                    cy.wrap(iframeBody).find('#input_169').type('I like to use Viagra Pill')
                }
            }

            cy.wrap(iframeBody).find('#form-pagebreak-next_107').click()

            //Please provide your reasons for seeking birth control (check all that apply)
            for (let i = 0; i < 6; i++) {

                // Construct the dynamic checkbox ID
                const checkboxId = `input_108_${i}`;

                // Check the checkbox by targeting the checkbox input within the label
                cy.wrap(iframeBody).find(`#label_${checkboxId}`).click()

                if (i == 1) {
                    cy.wrap(iframeBody).find('#input_109').type('I want to regulate period')
                }
                else if (i == 3) {
                    cy.wrap(iframeBody).find('#input_110').type('My doctor said I have some sexual problem')
                }

                else if (i == 5) {
                    cy.wrap(iframeBody).find('#input_170').type('My wife wants multiple babies')
                }
            }
            cy.wrap(iframeBody).find('#form-pagebreak-next_112').click()

            //Please select any of the following which apply to you (check all that apply)

            for (let i = 0; i < 6; i++) {
                // Construct the dynamic checkbox ID
                const checkboxId = `input_113_${i}`;

                // Uncheck the checkbox by targeting the checkbox input within the label
                if (i == 0 || i == 2 || i == 3 || i == 4 || i == 5) {
                    cy.wrap(iframeBody).find(`#label_${checkboxId}`).click().click()
                } else {
                    // Check the checkbox at other positions
                    cy.wrap(iframeBody).find(`#label_${checkboxId}`).click();
                }

                // Optionally, additional assertions or actions here
                if (i == 1) {
                    cy.wrap(iframeBody).find('#input_114').type('Around 6 months I have been using');
                }
            }
            cy.wrap(iframeBody).find('#form-pagebreak-next_210').click()
            cy.wrap(iframeBody).find('#form-pagebreak-back_119').click()

            //Unselect Breast Feeding
            cy.wrap(iframeBody).find('#label_input_113_1').click()
            //Select None option
            cy.wrap(iframeBody).find('#label_input_113_5').click()
            //Checking next again
            cy.wrap(iframeBody).find('#form-pagebreak-next_210').click()


            //Have you ever been diagnosed with hypertension?
            cy.wrap(iframeBody).find('#label_input_117_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_117_0').click()
            cy.wrap(iframeBody).find('#input_118').type('My hypertension is very bad since 2020')
            cy.wrap(iframeBody).find('#form-pagebreak-next_119').click()

            //checking with "No"
            cy.wrap(iframeBody).find('#form-pagebreak-back_198').click()
            cy.wrap(iframeBody).find('#label_input_117_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_119').click()

            //Have you checked your blood pressure reading in the last six months?
            cy.wrap(iframeBody).find('#label_input_120_0').click()
            cy.wrap(iframeBody).find('#label_input_120_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#form-pagebreak-next_198').click()

            //Select your blood pressure reading taken within the last 6 months?
            cy.wrap(iframeBody).find('#label_input_197_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_54').click()

            //Do you have a preferred method of birth control?
            for (let i = 0; i < 5; i++) {

                // Construct the dynamic checkbox ID
                const checkboxId = `input_173_${i}`;

                // Check the checkbox by targeting the checkbox input within the label
                cy.wrap(iframeBody).find(`#label_${checkboxId}`).click()

            }

            cy.wrap(iframeBody).find('#form-pagebreak-next_126').click()

            //Have you previously used any form of prescription birth control?
            cy.wrap(iframeBody).find('#label_input_128_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_128_0').click()
            cy.wrap(iframeBody).find('#input_129').type('Yes I have used birth control named RB')
            cy.wrap(iframeBody).find('#form-pagebreak-next_188').click()

            //Period Date
            const desiredDate = '11-06-2023';
            cy.wrap(iframeBody).find('#lite_mode_199').type(desiredDate);
            cy.wrap(iframeBody).find('#form-pagebreak-next_130').click()

            
            //Period occurance time
            cy.wrap(iframeBody).find('#input_131').type('33')
            cy.wrap(iframeBody).find('#form-pagebreak-next_132').click()

            //Do any of the following situations or medical conditions apply to you? (check all that apply) (18 options)
            cy.wrap(iframeBody).find('#label_input_134_17').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_141').click()

            //Do you smoke cigarettes, e-cigarettes, or vapes?
            cy.wrap(iframeBody).find('#label_input_142_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_144').click()
            
            //Are you currently taking any of the following medications or undergoing any treatments? (check all that apply) {14 Items Total}
            cy.wrap(iframeBody).find('#label_input_146_13').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_150').click()

            //Do you have any other medical conditions?
            cy.wrap(iframeBody).find('#label_input_151_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_152').click()

            //Do you have any allergies to food, dyes, medications, or anything else?
            cy.wrap(iframeBody).find('#label_input_153_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_154').click()

            //Have you had any surgeries or hospitalizations?
            cy.wrap(iframeBody).find('#label_input_155_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_156').click()

            //How long ago was your most recent check up with a physician?
            cy.wrap(iframeBody).find('#label_input_193_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_201').click()

            //Did you understand all the questions which were asked?
            cy.wrap(iframeBody).find('#label_input_157_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_191').click()

            //Is there anything else you would like to tell your doctor, or do you have any questions?
            cy.wrap(iframeBody).find('#label_input_212_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_202').click()

            //Please acknowledge that you understand and agree to the following
            cy.wrap(iframeBody).find('#label_input_209_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_239').click()

            //Last step {Medications we offer}
            cy.wrap(iframeBody).find('#label_input_287_0').click()
            cy.wrap(iframeBody).find('#input_42').click()








        });






    })

}