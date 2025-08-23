import 'cypress-file-upload'

class EditHero{
    selectorsList(){
        const selectors = {
            btnEditHero: '[data-cy="pencil"]',
            inputName: "[data-cy='nameInput']",
            inputPrice: "[data-cy='priceInput']",
            inputFans: "[data-cy='fansInput']",
            inputSaves: "[data-cy='savesInput']",
            powerSelector: "[multiple='']",
            choseAvatarFile: "[data-cy='avatarFile']",
            //seletor genérico de cartão
            heroCard: "[data-cy='hero-card']",
            butonSubmit: ".text-white",
            confirmHeroEdited: "[data-cy='name']",
        }
        return selectors
    }

    editHeroSuccess(name, price, fans, saves, avatar){
        cy.get(this.selectorsList().btnEditHero).eq(7).click()
        cy.get(this.selectorsList().inputName).clear().type(name)
        cy.get(this.selectorsList().inputPrice).clear().type(price)
        cy.get(this.selectorsList().inputFans).clear().type(fans)
        cy.get(this.selectorsList().inputSaves).clear().type(saves)
        cy.get(this.selectorsList().powerSelector).select(2)
        cy.get(this.selectorsList().choseAvatarFile).attachFile(avatar)
        cy.get(this.selectorsList().butonSubmit).eq(2).click()
        cy.get(this.selectorsList().confirmHeroEdited).contains('Angelita').should('be.visible')
    }
}

export default EditHero