import 'cypress-file-upload'

describe('File upload', function(){

    it('Single File Upload',function(){

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Syllabus.pdf')
        cy.get("#file-submit").click();

    })

    it('File Upload by drag and drop', function(){
    

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Syllabus.pdf", {subjectType: 'drag-n-drop'})



    })

    it('Multiple Files Upload', function(){
    
        cy.get("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#file-upload").attachFile('Syllabus.pdf','Syllabus-edited-ISTQB.pdf')



    })




})