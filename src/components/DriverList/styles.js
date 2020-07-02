import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const TitleContainer = styled.div`
  margin: 20px 80px;
  h3 {
    font-size: 50px;
    color: #474660;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px;

    h3 {
      font-size: 25px;
      color: #474660;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const ListContainer = styled.div`
  margin: 20px 80px;
  @media (max-width: 768px) {
    margin: 20px 20px;
  }
`;