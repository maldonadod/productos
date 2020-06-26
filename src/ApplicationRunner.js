import main from "./main";

class ApplicationRunner {
  constructor(renderer, productos) {
    this.renderer = renderer
    this.productos = productos
  }
  launch() {
    main(this.renderer, this.productos)
  }
}

export default ApplicationRunner;