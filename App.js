import logo from './logo.svg';
import './App.css';
import './assets/componentes/css/cssIndex.css'
import './assets/componentes/css/iPadCss.css'
import './assets/componentes/css/pcCss.css'
import { Nav } from './DetalleIndex/Nav/NavBotones';
import { Seccion } from './DetalleIndex/ListadoProductos/Productos';
import { Carrito } from './DetalleIndex/ListadoProductos/Carrito';
import { Formulario } from './DetalleIndex/DatosClientes/FormularioPedido';
import { ChecksBox } from './DetalleIndex/Checks/ChecksBox';
import LogoMaxi from './assets/componentes/Imagenes/Logo maxi pizzas.png';

function App() {
  return (
<div className="Container">
<header><img src={LogoMaxi} title="Logo" alt="Logo"/></header>
<Nav></Nav>
<Seccion></Seccion>
<Carrito></Carrito>
<Formulario></Formulario>
<ChecksBox></ChecksBox>
<button className="confirmarPedido">CONFIRMAR/IMPRIMIR</button>
</div>

  );
}

export default App;
