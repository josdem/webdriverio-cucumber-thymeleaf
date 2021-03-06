const Page = require("./page")
const properties = require(`../properties/${process.env.NODE_ENV}.properties`)

class OrderPage extends Page {
  get zipCodeInput() {
    return $('[id="Postal_Code_Sep"]')
  }
  get cityInput() {
    return $('[id="City_Sep"]')
  }
  get stateSelector() {
    return $('[id="Region_Sep"] [value="MI"]')
  }
  get searchLocationsButton() {
    return $('[type="submit"]')
  }

  async selectZipCodeCityAndState() {
    const zipCode = await this.zipCodeInput
    expect(zipCode).toBeExisting()
    zipCode.setValue(properties.zipCode)
    const city = await this.cityInput
    expect(city).toBeExisting()
    city.setValue(properties.city)
    const state = await this.stateSelector
    expect(state).toBeExisting()
    state.click()
    const button = await this.searchLocationsButton
    expect(button).toBeExisting()
    button.click()
  }

  open(url) {
    return super.open(url)
  }
}

module.exports = new OrderPage()
