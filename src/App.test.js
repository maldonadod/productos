import ApplicationRunner from "./ApplicationRunner";
import ReactTestingRenderer from "./ReactTestingRenderer";

describe("App", () => {
  let registroDeProductos, renderer, app;

  beforeEach(() => {
    registroDeProductos = {
      registrar: jest.fn(),
      leer: jest.fn().mockResolvedValue([])
    }
    renderer = new ReactTestingRenderer()
    app = new ApplicationRunner(renderer, registroDeProductos)

    app.launch()
  })

  it("debe ayudar al usuario a mantener registro de los productos que necesita", async () => {
    registroDeProductos.registrar.mockResolvedValue()

    await renderer.ingresarProducto("Mostaza")

    await renderer.misProductosContiene("Mostaza")
  });
  it("debe comunicar que hubo un error registrando al producto", async () => {
    registroDeProductos.registrar.mockRejectedValue(new Error("un error"))

    await renderer.ingresarProducto("Mostaza")

    await renderer.haComunicadoErrorRegistrandoProducto("Mostaza", new Error("un error"))
  });
})