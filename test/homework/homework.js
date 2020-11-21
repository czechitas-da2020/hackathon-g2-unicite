/* 
ZADANI:
 Kliknout na tlačítko právě když je na něm vyobrazena lištička 🦊 Easy peasy!
  1. Jdi na stranku https://automation.cervik.repl.co/findfox.html
  2. DULEZITE: Pockej, az uvidis 🦊 v buttonu. Podivej se na https://webdriver.io/docs/api/element/waitForDisplayed.html
      ⚠️ Doporucuju zvysit timeout a nastavit interval na 30 (jak casto se bude WDIO ptat, jestli je dany element pritomny)
  3. Klikni na tlacitko s 🦊
  4. Udelej screenshot a pojmenuj ho listicka.png
  5. Nastav si dostatecny browser.pause(). Opravdu :) Treba 20 sekund.
  6. Relaxuj :)) 
  HINT: Emoji muzes pouzit v selektoru ;)
  Odevzdej screenshot a kod do moje.czechitas. :) 
  Deadline neděle 22.11 v 22:11
*/

describe('Find 🦊',()=>{
before (() => {
  browser.url('https://automation.cervik.repl.co/findfox.html')
})

  it('if you can!',()=>{
  browser.$('div.container button.btn.btn-success');
  browser.time
  })
})