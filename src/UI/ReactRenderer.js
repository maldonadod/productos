import ReactDOM from 'react-dom';

class ReactRenderer {
  render(tree) {
    ReactDOM.render(tree, document.getElementById('root'));
  }
}

export default ReactRenderer;