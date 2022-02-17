const { Given, When, Then } = require("@cucumber/cucumber")

const OrderPage = require("../pageobjects/order.page")

Given("A order page as {string}", async (string) => {
  await OrderPage.open(string)
  await OrderPage.selectZipCodeCityAndState()
})

When("I enter customer information", async () => {
  return "pending"
})

When("I select pizza", async () => {
  return "pending"
})

Then("I validate items", async () => {
  return "pending"
})
