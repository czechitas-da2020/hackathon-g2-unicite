describe('Create New Account', () => { 
    before(()=>{
      browser.url('http://www.czechitas-hackhaton.cz/en/')
    })
    
    
    it('registrace noveho uzivatele', ()=>{
        let Name = 'John';
        let LastName = 'Nevim';
        let email = 'nevim@nevim.cz';
        let Password = '12345';
        //z hlavni stranky se pres Sign in button dostanu na Login page
        browser.$('.user_login.navigation-link').click()
        expect(browser).toHaveTitle('Login - Three foxes lounge');
        browser.$('#email_create').setValue(email)
        browser.$('#SubmitCreate').click()
        expect(browser.$('h1')).toHaveText('Create an account')
        expect(browser.$('h3')).toHaveText('Your personal information')
        
        browser.$('#id_gender2').click()
        browser.$('#customer_firstname').setValue(Name)
        browser.$('#customer_lastname').setValue(LastName)
        expect(browser.$('#email')).toHaveValue(email)
        browser.$('#passwd').setValue(Password)
        browser.$('#submitAccount').click()
        
    })
})
