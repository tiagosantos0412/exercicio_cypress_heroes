class Interaction{
    selectorsList(){
        const selectors = {
            heroCard: "data-cy='hero-card'",
            likeButton: '[data-cy="like"]',
            hireButton: '[data-cy="money"]',
            confirmHire: '[data-cy="confirm-hire"], .text-white',
            cancelHire: '[data-cy="cancel-hire"], .text-gray-800',
            // Seletores genéricos para cards
            heroCard: '[data-cy="hero-card"]',
            firstHeroCard: '[data-cy="hero-card"]:first',
        }
        return selectors
    }

    likeHero(){
        cy.get(this.selectorsList().likeButton).eq(0).click()
    }

    hireAHero(){
        cy.get(this.selectorsList().firstHeroCard).click()
        cy.get(this.selectorsList().hireButton).eq(0).click()
        cy.get(this.selectorsList().confirmHire).click()
    }

    cancelHire(){
        cy.get(this.selectorsList().firstHeroCard).click()
        ccy.get(this.selectorsList().hireButton).eq(0).click()
        cy.get(this.selectorsList().cancelHire).click()
    }
}

export default Interaction