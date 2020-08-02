import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export { Container, Content };
