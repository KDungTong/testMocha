describe("Login and access to Buyer journey", () => {
  // it("Login", async () => {
  //   browser.url("https://homing:newprogress%402022@homing.com/users/login");
  //   await browser.pause(2000);
  //   const emailTextBox = await $('[class="ant-input _1l_ede8"]');
  //   const passwordTextBox = await $("#password");
  //   const signInBtn = await $(
  //     '[class="ant-btn _2a_2ec4 ant-btn-primary ant-btn-block"]'
  //   );
  //   emailTextBox.setValue("tongkhanhdung3008+17@gmail.com");
  //   passwordTextBox.setValue("123456d");
  //   await browser.pause(2000);
  //   signInBtn.click();
  //   await browser.pause(2000);
  //   signInBtn.waitForDisplayed(5000, true, 'Error: Can not login into the system' );
  //   // await browser.pause(2000);
  // });
  it("Access to Buyer journey", async () => {
    await browser.url("https://homing:newprogress%402022@homing.com/home");
    const buyBtn = await $('');
    buyBtn.waitForDisplayed('50000');
    buyBtn.click();
    await browser.pause('9000');
  });
});
// const buyBtn = $('[type=button]')
