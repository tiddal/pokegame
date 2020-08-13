import React from 'react';

import { Container, Content, Result } from './styles';
import Pokecard, { PokemonProps } from '../../components/Pokecard';

interface PokedexProps {
  pokemons: PokemonProps[];
  isWinner: boolean;
}

const Pokedex: React.FC<PokedexProps> = ({ pokemons, isWinner }) => (
  <Container>
    <Content isWinner={isWinner}>
      <Result isWinner={isWinner}>
        <h1>{isWinner ? 'Winning hand!' : 'losing hand!'}</h1>
        <span>
          Total Experience:
          {' '}
          {pokemons.reduce((exp, pokemon) => exp + pokemon.baseExperience, 0)}
        </span>
      </Result>
      {pokemons.map(({
        id, name, type, baseExperience,
      }) => <Pokecard key={id} id={id} name={name} type={type} baseExperience={baseExperience} />)}
    </Content>
  </Container>
);

export default Pokedex;
