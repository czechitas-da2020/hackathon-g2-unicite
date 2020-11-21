describe('Login', () => { 
    before(()=>{
      browser.url('http://www.czechitas-hackhaton.cz/en/')
    })
  
    
    it('registrovany uzivatel se prihlasi s platnymi prihlasovacimi udaji', ()=>{
      
        browser.$('.user_login.navigation-link').click()
        expect(browser).toHaveTitle('Login - Three foxes lounge');
        browser.$('#email').setValue('tereza.pospichalova@gmail.com')
        browser.$('#passwd').setValue('ExYK4Ioy')
        browser.$('#SubmitLogin').click()
        expect(browser).toHaveTitle('My account - Three foxes lounge')
        //Logout
        browser.$('#user_info_acc').click()
        browser.$('a[title="Log me out"]').click()
    })
    it('registrovany uzivatel se prihlasi s jednim neplatnym prihlasovacim udajem - spatnym heslem', ()=>{
      
        browser.$('.user_login.navigation-link').click()
        expect(browser).toHaveTitle('Login - Three foxes lounge');
        browser.$('#email').setValue('tereza.pospichalova@gmail.com')
        browser.$('#passwd').setValue('ahoj')
        browser.$('#SubmitLogin').click()
        expect(browser.$('.alert alert-danger')).toHaveTextContaining('Invalid password.')
        
    })
    it('registrovany uzivatel se zkusi prihlasit s platnym emailem a prazdnym polem pro heslo', ()=>{
      
        browser.$('.user_login.navigation-link').click()
        expect(browser).toHaveTitle('Login - Three foxes lounge');
        browser.$('#email').setValue('tereza.pospichalova@gmail.com')
        browser.$('#passwd').setValue('')
        browser.$('#SubmitLogin').click()
        expect(browser.$('.alert alert-danger')).toHaveTextContaining('Password is required.')
    })

  
  })