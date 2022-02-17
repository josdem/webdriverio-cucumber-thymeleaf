const Page = require("./page")

class CheckoutPage extends Page {
  get cartItem() {
    return $('div[id="cart"]')
  }

  async validateItem() {
    const item = await this.cartItem
    expect(item).toBeExisting()
  }
}

module.exports = new CheckoutPage()
