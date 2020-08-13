import styled from 'styled-components';

interface StylingProps {
  isWinner: boolean;
}

const Container = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  row-gap: 30px;
  padding: 50px;
  padding-top: 0;
  border-radius: 15px;
  ${({ isWinner }: StylingProps) => isWinner && 'border: 2px solid #ccc;'}
`;

const Result = styled.div`
  margin-top: -25px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  grid-column: 1 / -1;
  text-align: center;
  h1 {
    padding: 10px 60px;
    text-transform: uppercase;
    clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%); 
    background-color: #333;
    color: #FF6970;
    font-size: 18px;
  }
  ${({ isWinner }: StylingProps) => isWinner && `
    h1 {
      padding: 10px 100px;
      color: #2AC289; 
      font-size: 24px;
    };
  `}
  span {
    font-size: 10px;
    margin-top: 5px;
    color: #aaa;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export { Container, Content, Result };
