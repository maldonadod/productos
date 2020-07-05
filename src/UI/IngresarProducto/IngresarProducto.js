import React from "react";
import Labels from "../Labels";

class NombreDeProductoInvalido {
  constructor(feedback) {
    this.feedback = feedback
  }
  guardar() {
    this.feedback.error(new Error("El nombre del producto no puede estar vacio"))
  }
}
class NombreDeProductoValido {
  constructor(nombre, input, registrarProducto) {
    this.nombre = nombre
    this.input = input
    this.registrarProducto = registrarProducto
  }
  guardar() {
    this.registrarProducto(this.nombre)
    this.input.limpiar()
  }
}
class Producto {
  constructor(feedback, registrarProducto, input) {
    const nombre = input.valor
    return nombre === ""
      ? new NombreDeProductoInvalido(feedback) 
      : new NombreDeProductoValido(nombre, input, registrarProducto) 
  }
}

function useInputText() {
  const VALOR_DEFAULT = ""
  const [valor, escribir] = React.useState(VALOR_DEFAULT)
  return {
    valor,
    escribir,
    limpiar() {
      escribir(VALOR_DEFAULT)
    }
  }
}

function IngresarProducto({ registrarProducto, feedback }) {
  const input = useInputText()

  function cuandoIntentoGuardar() {
    new Producto(feedback, registrarProducto, input).guardar()
  }
  function cuandoIntentoEscribir(e) {
    const valor = tomarValor(e)
    input.escribir(valor)
    feedback.removerMensajeDeNombreInvalido()
  }
  return (
    <section>
      <label htmlFor="producto">{Labels.IngresarProducto}</label>
      <input type="text" id="producto" onChange={cuandoIntentoEscribir} value={input.valor} />
      <button onClick={cuandoIntentoGuardar}>{Labels.GuardarProducto}</button>
    </section>
  )
}

function tomarValor(e) {
  return e.target.value
}

export default IngresarProducto; 