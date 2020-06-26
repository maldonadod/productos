import { render, fireEvent } from "@testing-library/react";
import Labels from "./UI/Labels";

class ReactTestingRenderer {
  render(tree) {
    this.utils = render(tree)
  }
  async ingresarProducto(nombreProducto) {
    const input = this.utils.getByLabelText(Labels.IngresarProducto)
    fireEvent.change(input, { target: { value: nombreProducto } })
    fireEvent.click(this.utils.getByText(Labels.GuardarProducto))
  }
  async misProductosContiene(nombreProducto) {
    await this.utils.findByText(nombreProducto)
  }
  async haComunicadoErrorRegistrandoProducto(nombreProducto, error) {
    const producto = this.utils.queryByText(nombreProducto)
    expect(producto).toEqual(null)
    await this.utils.findByText(error.message)
  }
}

export default ReactTestingRenderer;