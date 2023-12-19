import 'cypress-file-upload'

<<<<<<< HEAD

describe('All types of  File upload', function(){


    it('Single File upload',function(){


        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile("iwA01_01.pdf")
=======
describe('File upload', function(){

    it('Single File Upload',function(){

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Syllabus.pdf')
>>>>>>> 2763f416548e340bb48d7ac5c65b82f20a2fb347
        cy.get("#file-submit").click();

    })

<<<<<<< HEAD
    it('Rename File Upload', function(){

 
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile({filePath:'iwA01_01.pdf',fileName:'prantofile.pdf'})
        cy.get("#file-submit").click();
=======
    it('File Upload by drag and drop', function(){
    

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Syllabus.pdf", {subjectType: 'drag-n-drop'})

>>>>>>> 2763f416548e340bb48d7ac5c65b82f20a2fb347


    })

<<<<<<< HEAD
    it('Drag and Drop upload', function(){

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#drag-drop-upload").attachFile("iwA01_01.pdf", {subjectType:'drag-n-drop'})
        cy.get("#file-submit").click();
=======
    it('Multiple Files Upload', function(){
    
        cy.get("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#file-upload").attachFile('Syllabus.pdf','Syllabus-edited-ISTQB.pdf')

>>>>>>> 2763f416548e340bb48d7ac5c65b82f20a2fb347


    })

<<<<<<< HEAD
    it.only('Multiple file upload', function(){

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php)

        cy.get("FilesToUpload").attachFile(["iwA01_01.pdf","iwA01_04 .pdf"])
        cy.get("#file-submit").click();


    })
=======
>>>>>>> 2763f416548e340bb48d7ac5c65b82f20a2fb347



})