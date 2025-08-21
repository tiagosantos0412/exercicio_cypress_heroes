class CreateHero {
    selectorsList(){
        const selectors = {
            butonCreateHero: "[href='/heroes/new'] .undefined",
            inputName: "[data-cy='nameInput']",
            inputPrice: "[data-cy='priceInput']",
            inputFans: "[data-cy='fansInput']",
            inputSaves: "[data-cy='savesInput']",
            powerSelector: "[data-cy='powersSelect']",
            choseAvatarFile: "[data-cy='avatarFile']",
            butonSubmit: ".text-white",
        }
        return selectors
    }

    createNewHero(name, price, fans, saves, avatar){
        cy.get(this.selectorsList().butonCreateHero).click()
        cy.get(this.selectorsList().inputName).type(name)
        cy.get(this.selectorsList().inputPrice).type(price)
        cy.get(this.selectorsList().inputFans).type(fans)
        cy.get(this.selectorsList().inputSaves).type(saves)
        cy.get(this.selectorsList().powerSelector).should('be.visible')
        cy.contains('Mind Control').click()
        cy.get(this.selectorsList().choseAvatarFile).attachFile(avatar)
        cy.get(this.selectorsList().butonSubmit).click()
    }
}

export default CreateHero