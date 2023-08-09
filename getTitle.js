describe("Select value in the drop down list", () => {
 
  it("Get title value", async () => {
    browser.url("https://the-internet.herokuapp.com/dropdown");
    const titleValue = await $("h3");

    console.log(await titleValue.getText());
   
  });
});
