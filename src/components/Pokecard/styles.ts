import styled from 'styled-components';
import { PokemonProps } from '.';

interface StylingProps {
  type: PokemonProps['type'];
}

const typesColor = {
  bug: '#729F3F40',
  water: '#4592C440',
  fire: '#FD7D2440',
  flying: '#3DC7EF40',
  electric: '#EED53540',
  fairy: '#FDB9E940',
  ghost: '#7B61A240',
  normal: '#A3ACAF40',
};

const Container = styled.div`
  background-color: #fafafa;
  ${({ type }: StylingProps) => `background: linear-gradient(0deg, ${typesColor[type]} 0%, #fafafa 35%, #fafafa 100%);`}
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.25);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  font-size: 20px;
  color: #333333;
  font-weight: 700;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px 0;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
    transition: transform ease .3s, opacity ease .3s;
    opacity: 0.7;
    :hover {
      transform: scale(1.25);
      opacity: 1;
    }
  }
`;

const Data = styled.div`
  color: #666;
  font-size: 12px;
  text-transform: capitalize;
`;

export {
  Container, Content, Name, Image, Data,
};
