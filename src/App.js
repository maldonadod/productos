import React from "react";
import IngresarProducto from "./UI/Components/IngresarProducto";


function Main({ productos }) {
  const [state, setState] = React.useState(null)
  const [productosLista, setProductos] = React.useState([])
  async function registrarProducto(nombreProducto) {
    const newList = [...productosLista, nombreProducto]
    try {
      await productos.registrar(nombreProducto)
      setProductos(newList)
    } catch (error) {
      setState(error)
    }
  }
  return (
    <section>
      <IngresarProducto registrarProducto={registrarProducto} />
      {productosLista.map((nombreProducto, index) => <div key={index}>{nombreProducto}</div>)}
      {state ? <div>{state.message}</div> : null}
    </section>
  );
}


export default Main;
