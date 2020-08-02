import React, { useState } from 'react';

import { Container, Content } from './styles';
import Pokecard from '../../components/Pokecard';

const Pokedex: React.FC = () => {
  const [pokemons] = useState([
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
      id: 39, name: 'Jigglypuff', type: 'normal', baseExperience: 95,
    },
    {
      id: 94, name: 'Gengar', type: 'poison', baseExperience: 225,
    },
    {
      id: 133, name: 'Eevee', type: 'normal', baseExperience: 65,
    },
  ]);
  return (
    <Container>
      <Content>
        {pokemons.map(({
          id, name, type, baseExperience,
        }) => <Pokecard id={id} name={name} type={type} baseExperience={baseExperience} />)}
      </Content>
    </Container>
  );
};

export default Pokedex;
