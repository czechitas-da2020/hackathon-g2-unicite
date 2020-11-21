describe('Web Three foxes Lounge', () => {

    it('overim nacteni stranky', () => {
        browser.url('http://www.czechitas-hackhaton.cz/en/');
        let nadpis = $('h1');
        console.log('Nadpis je: ' + nadpis.getText());
    
        //overeni 
        expect(nadpis).toHaveTextContaining('foxes')
    });


    it('napsani emailu do newsletteru', () => {
        let buttonNewsLetter = $('#newsletter-input');
        let buttonSubscribe = $('[name="submitNewsletter"]');
        browser.$(buttonNewsLetter).scrollIntoView();
        browser.$(buttonNewsLetter).setValue('amail@gmail.com');
        browser.$(buttonSubscribe).click();
        browser.pause(5000);

        //overeni 
        expect($('#newsletter-input')).toHaveValueContaining('A verification email has been sent.');
        browser.saveScreenshot('./newsletter.png');
    })
})    
