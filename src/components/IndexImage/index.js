import React from 'react';
import { Container, TitleContainer, SubtitleContainer, ScrollContainer } from './styles'
import truck from '../../assets/img/index.png'


function IndexImage() {
  return (
    <Container img={truck}>
      <TitleContainer>TruckPad Driver</TitleContainer>
      <SubtitleContainer>Com o Truckpad Driver você pode localizar caminhoneiros de todo o país</SubtitleContainer>
      <ScrollContainer>Role a página</ScrollContainer>
    </Container>
  );
}

export default IndexImage;