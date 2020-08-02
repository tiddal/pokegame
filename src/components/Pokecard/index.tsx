import React from 'react';

import {
  Container, Content, Name, Image, Data,
} from './styles';

interface PokecardProps {
  id: number;
  name: string;
  type: string;
  baseExperience: number;
}

const Pokecard: React.FC<PokecardProps> = ({
  id, name, type, baseExperience,
}) => {
  const imageSource = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, '0')}.png`;
  return (
    <Container>
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
