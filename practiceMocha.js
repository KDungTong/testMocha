describe("Login form", () => {
  it("Practice login", async () => {
    browser.url("https://the-internet.herokuapp.com/login");
    const userName = $("#username");
    const passWord = $("#password");
    const loginBtn = $('[type="submit"]');
    userName.waitForDisplayed(5000);
    userName.setValue("DungTong");
    passWord.setValue("123456");
    await browser.pause(3000);
    loginBtn.click();
    await browser.pause(3000);

    console.log(await browser.getTitle());
  });
});
