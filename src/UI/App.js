import React from "react";
import IngresarProducto from "./IngresarProducto/IngresarProducto";

function useFeedback() {
  const [error, tomarError] = React.useState(null)
  return {
    error(e) {
      tomarError(e)
    },
    removerMensajeDeNombreInvalido() {
      tomarError(null)
    },
    render() {
      return error ? <div>{error.message}</div> : null
    }
  }
}

function useProductos(registroDeProductos, productos, feedback) {
  const [lista, setProductos] = React.useState(productos)

  async function registrarProducto(nombreProducto) {
    try {
      await registroDeProductos.registrar(nombreProducto)
      setProductos([...lista, nombreProducto])
    } catch (e) {
      feedback.error(e)
    }
  }

  return [registrarProducto, lista]
}

function App(props) {
  const feedback = useFeedback()
  const [registrarProducto, productos] = useProductos(props.registroDeProductos, props.productos, feedback)

  return (
    <section>
      <IngresarProducto registrarProducto={registrarProducto} feedback={feedback} />
      <ListadoDeProductos productos={productos} />
      {feedback.render()}
    </section>
  );
}

function ListadoDeProductos({productos}) {
  return productos.map(
    (nombreProducto, index) => <div key={index}>{nombreProducto}</div>
  )
}


export default App;