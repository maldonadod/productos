import main from './main';
import RegistroDeProductosEnLocalStorage from './Repositorios/RegistroDeProductosEnLocalStorage';
import ReactRenderer from './UI/ReactRenderer';

main(new ReactRenderer(), new RegistroDeProductosEnLocalStorage());