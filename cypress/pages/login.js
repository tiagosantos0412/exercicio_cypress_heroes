class Login {
    selectorsList(){
        const selectors = {
            loginButton: 'li > .undefined',
            modalVisible: '.modal-container > .open',
            userEmail: "[data-cy='email']",
            userPssword: "[data-cy='password']",
            submitButton: '.undefined.w-full',
            errorLoginMessage: '.text-red-500',
            emailRequireMessage: ':nth-child(1) > .text-red-500',
            passwordRequireMessage: ':nth-child(2) > .text-red-500',
        }
        return selectors
    }

    accesLogin(){
        cy.visit('heroes')
    }

    loginWithAnyUser(userEmail, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().modalVisible).should('be.visible')
        cy.get(this.selectorsList().userEmail).clear().type(userEmail)
        cy.get(this.selectorsList().userPssword).clear().type(password)
        cy.get(this.selectorsList().submitButton).click()
    }

    loginFail(userEmail, password){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().modalVisible).should('be.visible')
        cy.get(this.selectorsList().userEmail).clear().type(userEmail)
        cy.get(this.selectorsList().userPssword).clear().type(password)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().errorLoginMessage).should('be.visible')
    }

    emptyLogin(){
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().modalVisible).should('be.visible')
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().emailRequireMessage).should('be.visible')
        cy.get(this.selectorsList().passwordRequireMessage).should('be.visible')
    }

    confirmLogin(){
        cy.get(this.selectorsList().loginButton).contains('Logout')
    }
}
export default Login