const templatePage = require('../pages/template.page')

describe('Template suite', () => {

    before(() => {
        browser.url('http://czechitas-shopizer.azurewebsites.net/shop/')
    });

    it('template test-case', () => {
        browser.$('.addToCart[productid="1"]').click()
        browser.pause(3000)

        browser.url('http://czechitas-shopizer.azurewebsites.net/shop/cart/shoppingCart.html')
        expect(browser($('h1'))).toHaveText('Review your order')
        expect($('.nomargin')).toHaveText('Retro style bag')
    })
})