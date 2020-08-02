import React from 'react';

// import { Container } from './styles';

interface PokecardProps {
  id: number;
  name: string;
  type: string;
  baseExperience: number;
}

const Pokecard: React.FC<PokecardProps> = ({
  id, name, type, baseExperience,
}) => {
  const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div>
      <p>{name}</p>
      <img src={imageSource} alt={name} />
      <div>
        Type:
        {' '}
        {type}
      </div>
      <div>
        EXP:
        {' '}
        {baseExperience}
      </div>
    </div>
  );
};

export default Pokecard;
