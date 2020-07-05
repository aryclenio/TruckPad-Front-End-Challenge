import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const TitleContainer = styled.div`
  margin: 20px 80px;
  display: flex;
  justify-content: center;
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

export const SearchContainer = styled.div`
  margin: 20px 80px;
  display: flex;
  justify-content: center;
  .ant-input-search {
    width: 50%;
  }
  @media (max-width: 768px) {
    margin: 20px 20px;
    .ant-input-search {
    width: 100%;
  }
  }
`;

export const ListContainer = styled.div`
  margin: 20px 80px;
  span {
    font-weight: bold;
  }
  .ant-col {
    margin-top: 20px;
    .ant-card {
      border-color: #B2B2C2;
    }
    .ant-card-head {
      border-color: #B2B2C2;
    }
    .ant-card-head-title {
      font-weight: bold;
    }
  }
  .btn-edit {
    
  }
  @media (max-width: 768px) {
    margin: 20px 20px;
    .ant-col {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const NoDriverContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  .ant-col {
    display: flex;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  margin: 60px 80px;
  margin-bottom: -30px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 0 30px;
    margin-bottom: -10px;
    display: flex;
    justify-content: center;
    img {
      width: 60%;
    }
  }
`;