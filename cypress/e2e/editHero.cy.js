import userData from '../fixtures/user-data.json'
import Login from "../pages/login";
import EditHero from '../pages/editHero';

const login = new Login()
const edit = new EditHero()

describe('Cypress Heroes Tests', ()=>{
    it('Edit Hero', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userAdmin.userEmail,
            userData.userAdmin.password
        )
        login.confirmLogin()
        edit.editHeroSuccess(
            'Angelita', 70, 2, 0,
            userData.avatarTest.avatar2
        )
    })
})