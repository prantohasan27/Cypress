import 'cypress-file-upload'


describe('All types of  File upload', function(){


    it('Single File upload',function(){


        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile("iwA01_01.pdf")
        cy.get("#file-submit").click();

    })

    it('Rename File Upload', function(){

 
        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#file-upload").attachFile({filePath:'iwA01_01.pdf',fileName:'prantofile.pdf'})
        cy.get("#file-submit").click();


    })

    it('Drag and Drop upload', function(){

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get("#drag-drop-upload").attachFile("iwA01_01.pdf", {subjectType:'drag-n-drop'})
        cy.get("#file-submit").click();


    })

    it.only('Multiple file upload', function(){

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php)

        cy.get("FilesToUpload").attachFile(["iwA01_01.pdf","iwA01_04 .pdf"])
        cy.get("#file-submit").click();


    })



})