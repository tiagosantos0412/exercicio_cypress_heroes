class DeleteHero {
    selectorsList(){
        const selectors = {
            btnRemoveHero: "[data-cy='trash']",
            btnConfirmDelete: '.bg-red-600',
            btnCancelDelete: '.gap-4 > .gap-2 > .text-gray-800',
            //seletor genérico de cartão
            heroCard: "[data-cy='hero-card']",
            confirmNewHero: "[data-cy='name']",
        }
        return selectors
    }
    
    deleteHeroSuccess(){
        cy.get(this.selectorsList().heroCard).eq(7).click()
        cy.get(this.selectorsList().btnRemoveHero).eq(7).click()
        cy.get(this.selectorsList().btnConfirmDelete).click()
        cy.get(this.selectorsList().confirmNewHero).should('not.contain.text', 'Steve')
    }

    cancelDeleteHero(){
        cy.get(this.selectorsList().heroCard).eq(7).click()
        cy.get(this.selectorsList().btnRemoveHero).click()
        cy.get(this.selectorsList().btnCancelDelete).click()
        cy.get(this.selectorsList().confirmNewHero).contains('Steve').should('be.visible')
    }
}

export default DeleteHero