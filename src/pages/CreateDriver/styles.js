
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  @media (max-width: 768px) {
    .ant-form-item {
      margin-bottom: 0;
    }
    .button-container {
      margin-top: 20px;
      button {
        width: 100%;
      }
    }
  }
`;

export const SessionTitle = styled.h3`
font-size: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 30px;
  } 
`;