describe("Test login page", () => {
  it("Open login page", async () => {
    browser.url("https://the-internet.herokuapp.com");

    const formAuthentication = $("=Form Authentication");
    formAuthentication.waitForDisplayed("5000");
    formAuthentication.click();
    await browser.pause("5000");
  });
});
