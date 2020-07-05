import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.img});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const TitleContainer = styled.div`
    font-size: 5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
`;

export const SubtitleContainer = styled.div`
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    margin: 0 22%;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 20px;
      margin: 0 20%;
    }
`;

export const ScrollContainer = styled.div`
    position: absolute;
    bottom: 20px;
    color: #fff;
    text-align: center;
    img {
      width: 100px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
      img {
        width: 70px;
      }
    }
`;