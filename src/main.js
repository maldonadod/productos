import React from "react";
import App from "./UI/App";

async function main(renderer, registroDeProductos) {
  const productos = await registroDeProductos.leer()
  renderer.render(<App registroDeProductos={registroDeProductos} productos={productos} />)
}

export default main; 