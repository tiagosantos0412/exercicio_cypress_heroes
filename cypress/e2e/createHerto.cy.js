import userData from '../fixtures/user-data.json'
import Login from "../pages/login";
import CreateHero from '../pages/createHero';

const login = new Login()
const hero = new CreateHero()

describe('Cypress Hero Tests', ()=>{
    it('Create a New Hero', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userAdmin.userEmail,
            userData.userAdmin.password
        )
        login.confirmLogin()
        hero.createNewHero(
            'Steve', 51, 4, 1, 
            userData.avatarTest.avatar
        )
    })
})