describe("switch tabs and get the title ", () => {
  it("Get the title of the tabs", async () => {
    browser.url("https://the-internet.herokuapp.com/");
    await browser.pause(1000);
    await $("=Dropdown").click();
    await browser.pause(1000);
    await $("=Elemental Selenium").click();
    const allWindows = await browser.getWindowHandles();
    const firstWindow = allWindows[0];
    const secondWindow = allWindows[1];

    await browser.switchToWindow(secondWindow);
    await browser.pause(3000);
    // const secondTitle = await browser.getTitle();
    console.log("The title of second window", await browser.getTitle());
    await browser.pause(3000);

    await browser.switchToWindow(firstWindow);
    // const firstTitle = await browser.getTitle();
    console.log("The title of first window", await browser.getTitle());
    await browser.pause(3000);
  });
});
