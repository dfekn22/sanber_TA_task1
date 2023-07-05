export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    //purchase scenario
    link_ATC = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    link_cart = '.shopping_cart_link'
    link_Purchase = '[data-test="checkout"]'
    link_FirstName = '[data-test="firstName"]'
    link_LastName = '[data-test="lastName"]'
    link_Postal = '[data-test="postalCode"]'
    link_Continue = '[data-test="continue"]'
    link_Finish = '[data-test="finish"]'
    link_BackHome = '[data-test="back-to-products"]'
    
    //delete cart item
    link_Product = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    link_Tshirt = 'Sauce Labs Bolt T-Shirt'
    link_removeItem = '[data-test="remove-sauce-labs-bolt-t-shirt"]'
    link_BacktoProducts = 'Back to products'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    purchaseATC(){
        cy.get(this.link_ATC).click()
        cy.get(this.link_cart).click()
        cy.get(this.link_Purchase).click()
        //input consumer data
        cy.get(this.link_FirstName).type('daffa')
        cy.get(this.link_LastName).type('eka')
        cy.get(this.link_Postal).type('123123')
        //checkout confirm
        cy.get(this.link_Continue).click()
        cy.get(this.link_Finish).click()
        cy.get(this.link_BackHome).click()
    }
    deleteCartItem(){
        cy.get(this.link_Product).click()
        cy.contains(this.link_Tshirt).click()
        cy.get(this.link_removeItem).click()
        cy.contains(this.link_BacktoProducts).click()
    }
}