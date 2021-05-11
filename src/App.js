import './App.css';
import { useState } from 'react';
import Card from './Card';
import ProfessorEich from './ProfessorEich';
import Eich from './images/professorEich.png';
import PokemonLogo from './images/pokemon-logo.svg';

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Blitza', type: 'Elektro' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
  ];

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [professorEich, setProfessorEich] = useState([]);

  function sendToProfessorEich(name) {
    const pokemonToAdd = pokemon.find((pokemon) => pokemon.name === name);
    setProfessorEich([...professorEich, pokemonToAdd]);
    releasePokemon(name);
  }

  function releasePokemon(name) {
    const remainingPokemon = pokemon.filter((pokemon) => pokemon.name !== name);
    setPokemon(remainingPokemon);
  }

  function fromEichToLiberty(name) {
    const pokemonToAdd = professorEich.find((pokemon) => pokemon.name === name);
    setPokemon([pokemonToAdd, ...pokemon]);
    const remainingPokemon = professorEich.filter(
      (pokemon) => pokemon.name !== name
    );
    setProfessorEich(remainingPokemon);
  }

  return (
    <div className="App">
      <section className="imageWrapper">
        <img className="PokemonLogo" src={PokemonLogo} alt="Pokemon Logo" />
        <h3>Pokemon bei Professor Eich ({professorEich.length}) </h3>
      </section>
      <section className="flex-container">
        <img className="eich" src={Eich} alt="Professor Eich" />
        {professorEich.map((pokemon) => (
          <ProfessorEich
            name={pokemon.name}
            type={pokemon.type}
            fromEichToLiberty={fromEichToLiberty}
          />
        ))}
      </section>
      {pokemon.map((pokemon) => (
        <Card
          name={pokemon.name}
          type={pokemon.type}
          sendToProfessorEich={sendToProfessorEich}
        />
      ))}
    </div>
  );
}

export default App;
