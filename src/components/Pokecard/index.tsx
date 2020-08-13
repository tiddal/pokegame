import React from 'react';

import {
  Container, Content, Name, Image, Data,
} from './styles';

export interface PokemonProps {
  id: number;
  name: string;
  type: 'bug' | 'water' | 'fire' | 'flying' | 'electric' | 'fairy' | 'ghost' | 'normal';
  baseExperience: number;
}

const Pokecard: React.FC<PokemonProps> = ({
  id, name, type, baseExperience,
}) => {
  const imageSource = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
  return (
    <Container type={type}>
      <Content>
        <Name>{name}</Name>
        <Image>
          <img src={imageSource} alt={name} />
        </Image>
        <Data>
          Type:
          {' '}
          {type}
        </Data>
        <Data>
          EXP:
          {' '}
          {baseExperience}
        </Data>
      </Content>
    </Container>
  );
};

export default Pokecard;
