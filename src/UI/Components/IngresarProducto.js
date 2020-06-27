import React from "react";
import Labels from "../Labels";

function recordarNombreProducto(nombreProducto, guardarNombreProducto, cambiarEstado) {
  guardarNombreProducto(nombreProducto)
  cambiarEstado(null)
}

function intentarRegistrarProducto(nombreProducto, cambiarEstado, registrarProducto, guardarNombreProducto) {
  if (nombreProducto === "") {
    cambiarEstado("error")
  } else {
    registrarProducto(nombreProducto)
    guardarNombreProducto("")
  }
}

function IngresarProducto({ registrarProducto }) {
  const [estado, cambiarEstado] = React.useState(null)
  const [nombreProducto, guardarNombreProducto] = React.useState("")
  
  function onChange(e) {
    const nombreProducto = e.target.value
    recordarNombreProducto(nombreProducto, guardarNombreProducto, cambiarEstado)
  }
  function onClick() {
    intentarRegistrarProducto(nombreProducto, cambiarEstado, registrarProducto, guardarNombreProducto)
  }
  return (
    <section>
      <label htmlFor="producto">{Labels.IngresarProducto}</label>
      <input type="text" id="producto" onChange={onChange} value={nombreProducto} />
      <button onClick={onClick}>{Labels.GuardarProducto}</button>
      <Feedback estado={estado} />
    </section>
  )
}

function Feedback({ estado }) {
  return estado === "error"
    ? <section>El nombre del producto no puede estar vacio</section>
    : null
}

export default IngresarProducto;