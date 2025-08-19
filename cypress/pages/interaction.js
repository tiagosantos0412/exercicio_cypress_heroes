class Interaction{
    selectorsList(){
        const selectors = {
            likeButton: 'data-cy="like"',
            hireButton: 'data-cy="money"',
            confirmHire: '.text-white',
            cancelHire: '.gap-4 > .gap-2 > .text-gray-800'
        }
        return selectors
    }

    likeHero(){
        cy.get(this.selectorsList().likeButton).eq(1).click()
    }

    hireAHero(){
        cy.get(this.selectorsList().hireButton).eq(1).click()
        cy.get(this.selectorsList().confirmHire).click()
    }

    cancelHire(){
        cy.get(this.selectorsList().hireButton).eq(1).click()
        cy.get(this.selectorsList().cancelHire).click()
    }
}

export default Interaction