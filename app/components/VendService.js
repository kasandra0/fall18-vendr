//PRIVATE
import VendingMachine from "../models/VendMachine.js";

//instatiates an instance of the vending machine class
let vm = new VendingMachine(100, [{
  name: 'Fritos',
  price: 1,
  quantity: 3
}, {
  name: 'Tab',
  price: .75,
  quantity: 10
}, {
  name: 'Mt. Dew',
  price: 1,
  quantity: 1
}])

//PUBLIC
export default class VendService {
  //increases currentTransaction and returns new total
  addQuarter() {
    console.log(2)
    vm.currentTransaction += .25
    return vm.currentTransaction
  }
  //attempts to get the item requested from its index
  vendItem(productIndex) {
    //check if valid
    let product = vm.products[productIndex]
    // IF Exists    we have some            you have enough money
    if (product && product.quantity > 0 && vm.currentTransaction >= product.price) {
      this.processTransaction(product)
      return JSON.parse(JSON.stringify(product))
    }
    return false
  }
  //updates vending data on successful transaction
  processTransaction(product) {
    product.quantity--
    vm.totalMoney += product.price
    vm.currentTransaction -= product.price
  }
  //returns all products from the vending machine
  getProducts() {
    //breaks refrence in memory to protect code
    return JSON.parse(JSON.stringify(vm.products))
  }
}