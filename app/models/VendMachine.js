export default class VendingMachine {
  constructor(totalMoney, products) {
    this.totalMoney = totalMoney
    this.products = products
    this.currentTransaction = 0
  }
}