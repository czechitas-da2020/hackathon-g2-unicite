describe('Authentication page', () => { 
    beforeEach(()=>{
      browser.url('http://www.czechitas-hackhaton.cz/en/login?back=my-account')
    })
  
    it('Create an account option is available', ()=>{
      
        expect(browser.$('#create-account_form')).toBePresent()
        expect(browser.$('#SubmitCreate')).toBePresent()
    })
  
        it('Forgot password option is available', ()=>{
        let forgotPassword = browser.$('[title="Recover your forgotten password"]')
        expect(forgotPassword).toBePresent()
        forgotPassword.click()
        browser.pause(3000)
        expect(browser.$('h1')).toHaveText('FORGOT YOUR PASSWORD?')
      })
  
      it('Sign in option is available', ()=>{
        expect(browser.$('#SubmitLogin')).toBePresent()
      
      })
  
  })



