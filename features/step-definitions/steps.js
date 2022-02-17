const { Given, When, Then } = require("@cucumber/cucumber")

const OrderPage = require("../pageobjects/order.page")
const SearchPage = require("../pageobjects/search.page")
const EntreePage = require("../pageobjects/entree.page")

Given("A order page as {string}", async (string) => {
  await OrderPage.open(string)
  await OrderPage.selectZipCodeCityAndState()
})

When("I enter customer information", async () => {
  await SearchPage.selectDriveUpCarryout()
})

When("I select pizza", async () => {
  await EntreePage.selectPizza()
})

Then("I validate items", async () => {
  return "pending"
})
