import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 44rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.img});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 30rem;
  }
`;

export const TitleContainer = styled.div`
    font-size: 125px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 30px;
    }
`;

export const SubtitleContainer = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    margin: 0 22%;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
`;

export const ScrollContainer = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
`;