describe("Login into system", () => {
  it("Input data into all fields", async () => {
    browser.url("https://the-internet.herokuapp.com/login");
    const userName = $("#username");
    const passWord = $("#password");
    const loginBtm = $('[type="submit"]');
    await browser.pause(2000);
    userName.setValue("dungTong");
    passWord.setValue("123456");
    await browser.pause(2000);
    loginBtm.click();
    await browser.pause(3000);

  });
});
