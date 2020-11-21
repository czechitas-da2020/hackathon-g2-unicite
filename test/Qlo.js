describe('Funkce Qlo hyperlinku - vraceni na hlavni stranu', () => {
    it('Z Login stranky se vratime na hlavni pres logo v hlavicce', () => {
        browser.url('http://www.czechitas-hackhaton.cz/en/')
        browser.$('.user_login.navigation-link').click()
        expect(browser).toHaveTitle('Login - Three foxes lounge');
        browser.$('.logo.img-responsive').click()
        expect(browser).toHaveTitle('Three foxes lounge')
    })
    it('Z Aout us stranky se vratime na hlavni pres logo v hlavicce', () => {
        browser.url('http://www.czechitas-hackhaton.cz/en/')
        browser.$('.nav_toggle').click()
        browser.$('a*=About us').click()
        expect(browser).toHaveTitle('About us - Three foxes lounge')
        browser.$('.logo.img-responsive').click()
        expect(browser).toHaveTitle('Three foxes lounge')
    })
})