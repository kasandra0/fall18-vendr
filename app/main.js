import VendController from './components/VendController.js'


class App {
  constructor() {
    this.controllers = {
      vendController: new VendController()
    }
  }
}




// @ts-ignore
window.app = new App()