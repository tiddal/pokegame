import React, { useState, useEffect } from 'react';
import { PokemonProps } from '../../components/Pokecard';
import Pokedex from '../../containers/Pokedex';

import Container from './styles';

const Pokegame: React.FC = () => {
  const [playerOnePokedex, setPlayerOnePokedex] = useState<PokemonProps[]>([]);
  const [playerTwoPokedex, setPlayerTwoPokedex] = useState<PokemonProps[]>([]);

  useEffect(() => {
    const pokemonsFakeDB: PokemonProps[] = [
      {
        id: 4, name: 'Charmander', type: 'fire', baseExperience: 62,
      },
      {
        id: 7, name: 'Squirtle', type: 'water', baseExperience: 63,
      },
      {
        id: 11, name: 'Metapod', type: 'bug', baseExperience: 72,
      },
      {
        id: 12, name: 'Butterfree', type: 'flying', baseExperience: 178,
      },
      {
        id: 25, name: 'Pikachu', type: 'electric', baseExperience: 112,
      },
      {
        id: 39, name: 'Jigglypuff', type: 'fairy', baseExperience: 95,
      },
      {
        id: 94, name: 'Gengar', type: 'ghost', baseExperience: 225,
      },
      {
        id: 133, name: 'Eevee', type: 'normal', baseExperience: 65,
      },
    ];
    pokemonsFakeDB.sort(() => Math.random() - 0.5);
    setPlayerOnePokedex(pokemonsFakeDB.splice(0, pokemonsFakeDB.length / 2));
    setPlayerTwoPokedex(pokemonsFakeDB);
  }, []);

  function evaluateWinner(playerOne: PokemonProps[], playerTwo: PokemonProps[]) {
    const playerOneExperience = playerOne.reduce((exp, pokemon) => exp + pokemon.baseExperience, 0);
    const playerTwoExperience = playerTwo.reduce((exp, pokemon) => exp + pokemon.baseExperience, 0);
    return playerOneExperience > playerTwoExperience;
  }

  return (
    <Container>
      <Pokedex
        pokemons={playerOnePokedex}
        isWinner={evaluateWinner(playerOnePokedex, playerTwoPokedex)}
      />
      <Pokedex
        pokemons={playerTwoPokedex}
        isWinner={evaluateWinner(playerTwoPokedex, playerOnePokedex)}
      />
    </Container>
  );
};

export default Pokegame;
