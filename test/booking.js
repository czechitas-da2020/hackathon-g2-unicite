describe('main page booking', () => { 
    it('Using Our room button', ()=>{
    browser.url('http://www.czechitas-hackhaton.cz')
    browser.$('.btn.btn-default.button.htlRoomTypeBookNow').click()
    browser.switchWindow('http://www.czechitas-hackhaton.cz/en/home/1-super-delux-rooms.html')
    expect(browser.$('.hotel_name_block')).toHaveTextContaining('Budget cabin')
    browser.saveScreenshot('./screenshot_value_2.png')
})
})