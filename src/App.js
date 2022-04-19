import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades.jsx';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApi from './components/AjaxApis';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';

//HOOKS

import ConatadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <br />
                <br />

                <section>
                    <Componente msg="Hola soy un Componente Funcional expresado" />
                    <hr />
                    <Propiedades
                        cadena="Esto es una Cadena de Texto"
                        numero={'19'}
                        buleano={false}
                        arreglo={[1, 2, 3]}
                        objeto={{ nombre: 'Luis', correo: 'Luis@gmail.com' }}
                        funcion={(num) => num * num}
                        elementoReact={<i>Esto es un Elemento React</i>}
                        componenteReact={
                            <Componente msg="soy un componente como Prop" />
                        }
                    />
                    <hr />
                    <Estado />
                    <hr />
                    <RenderizadoCondicional />
                    <hr />
                    <RenderizadoElementos />
                    <hr />
                    <EventosES6 />
                    <hr />
                    <EventosES7 />
                    <hr />
                    <MasSobreEventos />
                    <hr />
                    <Padre />
                    <hr />
                    <CicloVida />
                    <hr />
                    <AjaxApi />
                    <hr />
                    <ConatadorHooks />
                    <hr />
                    <ScrollHooks />
                    <hr />
                    <RelojHooks />
                    <hr />
                    <AjaxHooks />
                    <hr />
                    <HooksPersonalizados />
                    <hr />
                </section>
            </header>
        </div>
    );
}

export default App;
