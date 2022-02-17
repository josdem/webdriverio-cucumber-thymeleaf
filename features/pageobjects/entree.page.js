const Page = require("./page")

class EntreePage extends Page {
  get pizzaLink() {
    return $('[id="pizza"]')
  }

  async selectPizza() {
    const pizza = await this.pizzaLink
    expect(pizza).toBeExisting()
    pizza.click()
  }
}

module.exports = new EntreePage()
