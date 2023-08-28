import { LoginPage } from "../pages/login_page"

const loginPage = new LoginPage()

it('Login Test Egp Bhutan', function(){

   loginPage.navigate()
   loginPage.enterusername()
   loginPage.enterpassword()
   loginPage.clickLogin()


})