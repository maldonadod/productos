const CLAVE = "productos"

class RegistroDeProductosEnLocalStorage {
  registrar(nombreProducto) {
    const productosString = localStorage.getItem(CLAVE)
    const productos = productosString ? JSON.parse(productosString) : []
    localStorage.setItem(CLAVE, JSON.stringify([...productos, nombreProducto]))
  }
  async leer() {
    const productosString = localStorage.getItem(CLAVE)
    return productosString ? JSON.parse(productosString) : []
  }
}

export default RegistroDeProductosEnLocalStorage;