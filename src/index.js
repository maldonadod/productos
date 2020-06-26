import ReactDOM from 'react-dom';
import main from './main';

class ReactRenderer {
  render(tree) {
    ReactDOM.render(tree, document.getElementById('root'));
  }
}

const productos = {
  registrar(nombreProducto) {
    console.log(nombreProducto)
    if (nombreProducto === "asd") {
      throw new Error("aguante michael jackson")
    }
  }
}

main(new ReactRenderer(), productos);