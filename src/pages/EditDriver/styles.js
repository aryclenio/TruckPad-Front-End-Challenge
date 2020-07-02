
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

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

export const FormContainer = styled.div`
  width: 50%;
  padding: 30px 60px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  } 
`;

export const ImageContainer = styled.div`
    width: 50%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
      display: none;
    } 
`;

export const SessionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  button {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  } 
`;