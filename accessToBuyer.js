describe('Access to Buyer journey', () => {
  it("Clicks on Buy button", async () => {
    await browser.url("https://homing:newprogress%402022@homing.com/home");
    await browser.pause('3000');
    const buyBtn = await $('.ant-btn*=How does unbundling work?');
    await buyBtn.waitForDisplayed('5000');
    await buyBtn.click();
    await browser.pause('3000');
  });
});
