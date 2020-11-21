describe('Web Three foxes Lounge', () => {
    it('overim nacteni stranky', () => {
        browser.url('http://www.czechitas-hackhaton.cz/en/');
        let nadpis = $('h1')
        console.log('Nadpis je: ' + nadpis.getText())
    
        //overeni 
        expect(nadpis).toHaveTextContaining('foxes')
    });


    it('kviknu na Sign in', () => {
        let buttonSignIn = $('span.hide_xs')
        console.log('Button ma nazev: ' + buttonSignIn.getText())
        browser.$(buttonSignIn).click()
        browser.pause(3000)
    
        //overeni 
        expect(buttonSignIn).toHaveAttribute('url','http://www.czechitas-hackhaton.cz/en/login?back=my-account')
    });
})    
