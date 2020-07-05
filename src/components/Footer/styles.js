import styled from 'styled-components';

export const Container = styled.div`
  .ant-layout-footer {
    background: #2D2D2D;
    padding: 20px 80px;
    .ant-row {
      align-items: center;
      margin-bottom: 5px;
    }
  }
  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0;
  }
  h3 {
    color: #fff;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 0;
  }
  svg {
    font-size: 20px;
    color: #FACE48;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    .ant-layout-footer {
      background: #2D2D2D;
      padding: 10px 25px;
    }
    h2 {
    font-size: 14px;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export const TitleSeparator = styled.div`
  height: 4px;
  width: 50px;
  background: #FACE48;
  margin: 5px 0 10px 0;
`;