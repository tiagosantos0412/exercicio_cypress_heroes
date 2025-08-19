import userData from '../fixtures/user-data.json'
import Login from "../pages/login";
import Interaction from '../pages/interaction';

const login = new Login()
const like = new Interaction()
const hire = new Interaction()

describe('Cypress Hero Tests', ()=>{
    it('Like hero', ()=>{
        login.accesLogin()
        login.loginWithAnyUser(
            userData.userSuccess.userEmail,
            userData.userSuccess.password
        )
        login.confirmLogin()
        like.likeHero()
    })
    it('Hire a Hero', ()=>{
        hire.hireAHero()
    })
    it('Cancel Hire', ()=>{
        hire.cancelHire()
    })
})