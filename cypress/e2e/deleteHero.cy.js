import userData from '../fixtures/user-data.json'
import Login from "../pages/login";
import DeleteHero from '../pages/deleteHero';

const login = new Login()
const deleteHero = new DeleteHero()

describe('Cypress Heroes Tests', ()=>{
    it('Delete Hero Success', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userAdmin.userEmail,
            userData.userAdmin.password
        )
        login.confirmLogin()
        deleteHero.deleteHeroSuccess()
    })
    it.only('Cancel Delte Hero', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userAdmin.userEmail,
            userData.userAdmin.password
        )
        login.confirmLogin()
        deleteHero.cancelDeleteHero()
    })
})