import React, { Component } from 'react';

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component {
    state = {
        pokemons: [],
    };

    peticion = async (url) => {
        let newPokemons = [];

        let res = await fetch(url),
            json = await res.json();
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((json) => {
        json.results.forEach(async (el) => {
            let res = await fetch(el.url),
                json = await res.json();
            // fetch(el.url)
            //     .then((res) => res.json())
            //     .then((json) => {
            let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
            };

            newPokemons.push(pokemon);
            this.setState({
                pokemons: newPokemons,
                //});
            });
        });
        //});
    };
    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        this.peticion(url);
    }

    render() {
        return (
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {this.state.pokemons.length === 0 ? (
                    <h3>Cargando...</h3>
                ) : (
                    this.state.pokemons.map((el) => (
                        <Pokemon
                            key={el.id}
                            name={el.name}
                            avatar={el.avatar}
                        />
                    ))
                )}
            </>
        );
    }
}
