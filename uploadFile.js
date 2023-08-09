import path from'path'

describe('Upload image into website', () => {
    it('Upload image', async () => {
        browser.url('https://the-internet.herokuapp.com/upload')
        const fileUpload = '#file-upload'
        const fileSubmit = '#file-submit'
        const filePath = './image.jpg'
        const fileToUpload = await browser.uploadFile(filePath)
        await $(fileUpload).waitForDisplayed(5000)
        await $(fileUpload).setValue(fileToUpload)
        await $(fileSubmit).click()
        browser.pause(3000)
    });
});