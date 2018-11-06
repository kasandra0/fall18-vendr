import VendService from "./VendService.js";
//PRIVATE

//Instatiates an instance of the VendService to be used for this controller
let vendService = new VendService()

//Updates the total on the page
function drawTotal(val) { // Total money that has been inserted
  document.getElementById('change').innerText = val
}
function drawTotalSales(val) {
  document.getElementById('total-sales').innerText = val;
}

//at the start of the application, draws all products
function drawProducts() {
  //gets products from the vend service
  let products = vendService.getProducts()
  let template = ''
  //builds template from each prodcut into template string
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.quantity > 0) {
      template += `
        <div>
          <p>${product.name} - $${product.price}</p>
          <p>${product.quantity} in stock</p>
          <button onclick="app.controllers.vendController.vendItem(${i})">BUY</button>
          <img src = "${product.pic}" height="150px"/>
        </div>
      `
    }
  }
  //adds template string to table
  document.getElementById('products').innerHTML = template
}

//PUBLIC
export default class VendController {
  constructor() {
    //calls the draw products at the start of the application
    drawProducts()
  }
  addQuarter() {
    //adds quarter to vending machine and returns the total
    let total = vendService.addQuarter()
    //after adding quarter re-draws total
    drawTotal(total)
  }
  dispenseChange() {
    vendService.dispenseChange();
    drawTotal(vendService.getCurrentTransaction());
  }
  vendItem(productIndex) {
    //attempts to process the vend item
    let item = vendService.vendItem(productIndex);
    //you will want to check that item exists and then draw it to the screen
    if (item) {
      let template = '<p>You just bought: </p>';
      template += `<img src="${item.pic}"/>` // get img address
      document.getElementById('current-transaction').innerHTML = template;
    }
    drawTotal(vendService.getCurrentTransaction());  // FINISH THIS
    drawTotalSales(vendService.getTotalMoney());
    drawProducts();
  }
}