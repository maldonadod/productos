import main from './main';
import RegistroDeProductosEnLocalStorage from './repositorios/RegistroDeProductosEnLocalStorage';
import ReactRenderer from './renderers/ReactRenderer';

main(new ReactRenderer(), new RegistroDeProductosEnLocalStorage());