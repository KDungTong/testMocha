describe("Select value in the dropdown list", () => {
  it("Select values", async () => {
    browser.url("https://the-internet.herokuapp.com/dropdown");
    const dropdownList = await $("#dropdown");
    dropdownList.waitForDisplayed(3000);
    await browser.pause(2000);
    dropdownList.selectByVisibleText("Option 1");
    await browser.pause(2000);
    dropdownList.selectByAttribute("value", "2");
    await browser.pause(2000);
  });
});
