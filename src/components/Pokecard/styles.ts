import styled from 'styled-components';

const Container = styled.div`
  background-color: #fafafa;
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
  margin: 20px 0 ;
  img{
    width: 100%;
    height: 100%;
  }
`;

const Data = styled.div`
  color: #666;
  font-size: 12px;
`;

export {
  Container, Content, Name, Image, Data,
};
