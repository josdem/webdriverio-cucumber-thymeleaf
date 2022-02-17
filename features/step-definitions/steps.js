const { Given, When, Then } = require("@cucumber/cucumber")

let title

Given("A webpage as {string}", async (keyword) => {
  browser.url(keyword)
})

When("I get page title", async () => {
  title = browser.getTitle()
})

Then("I validate title is {string}", async (title) => {
  expect(title === "josdem").toBeTruthy()
})
