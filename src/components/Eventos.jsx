import React, { Component } from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log('Sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        });
    }
    restar(e) {
        console.log('Restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

export class EventosES7 extends Component {
    state = {
        contador: 0,
    };

    //Arrow Functions

    sumar = (e) => {
        console.log('Sumando');
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        });
    };
    restar = (e) => {
        console.log('Restando');
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        });
    };

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.restar}>-</button>
                    <button onClick={this.sumar}>+</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

// Version Larga
// function Boton(props) {
//     return <button onClick={props.myOnClick}>Boton hecho Componente</button>;
// }

//Version Corta del mismo Boton

// const Boton = (props) => (
//     <button onClick={props.myOnClick}>Boton Echo Componente</button>
// );

//Version aun mas Corta

const Boton = ({ myOnClick }) => (
    <button onClick={myOnClick}>Boton Echo Componente</button>
);

export class MasSobreEventos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    };

    render() {
        return (
            <div>
                <h2>Mas Sobre Eventos </h2>
                <button
                    onClick={(e) =>
                        this.handleClick(
                            e,
                            'Hola pasando parametro desde un Evento'
                        )
                    }
                >
                    Saludar
                </button>

                {/* Evento  Personalizado
                <Boton
                    onClick={(e) =>
                        this.handleClick(e, 'Hola desde el Boton Personalizado')
                    }
                /> */}
                                                                                
                {/* Para el Evento personalizado tengo que pasarel evento como una prop y ejecutar el evento en el componente */}
                <Boton
                    myOnClick={(e) =>
                        this.handleClick(e, 'Hola desde el Boton Personalizado')
                    }
                />
            </div>
        );
    }
}
