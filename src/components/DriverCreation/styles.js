import styled from 'styled-components';

export const Container = styled.div`
  .ant-row {
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const TitleContainer = styled.div`
  margin: 60px 80px;

  h3 {
    font-size: 50px;
    color: #474660;
    font-weight: bold;
  }
  h4 {
    font-size: 25px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  button {
    font-size: 30px;
    color: #474660 !important;
    height: 90px;
    width: 400px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 30px;

    h3 {
      font-size: 25px;
      color: #474660;
      font-weight: bold;
    }
    h4 {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 30px;
      text-align: center;
      margin-bottom: 15px;
    }
    button {
      font-size: 16px;
      color: #474660 !important;
      height: 50px;
      width: 250px;
    }
  }
`;

export const ImageContainer = styled.div`
  margin: 60px 80px;
  @media (max-width: 768px) {
    margin: 0 30px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    img {
      width: 60%;
    }
  }
`;