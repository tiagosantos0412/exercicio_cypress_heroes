import userData from '../fixtures/user-data.json'
import Login from "../pages/login";

const login = new Login()

describe('Cypress Heroes Tests', ()=>{
  it.only('Login Success', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.userSuccess.userEmail,
      userData.userSuccess.password
    )
    login.confirmLogin()
  })
  it('Login Admin Success', ()=>{
    login.accesLogin()
    login.loginWithAnyUser(
      userData.userAdmin.userEmail,
      userData.userAdmin.password
    )
    login.confirmLogin()
  })
  it('Login Fail', ()=>{
    login.accesLogin()
    login.loginFail(
      'teste@teste.com',
      '123456@'
    )
  })
  it('Try Empty Login', ()=>{
    login.accesLogin()
    login.emptyLogin()
  })
})