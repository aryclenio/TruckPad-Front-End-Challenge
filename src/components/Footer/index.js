import { Layout, Row } from 'antd';
import React from 'react';
import { Container, TitleSeparator } from './styles'
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const { Footer } = Layout;
  return (
    <Container>

      <Footer>
        <h2>Entre em contato com a gente</h2>
        <TitleSeparator />
        <Row>
          <AiOutlineMail />
          <h3>contato@truckpad.com.br</h3>
        </Row>
        <Row>
          <FaWhatsapp />
          <h3>+55 (11) 4118.2880</h3>
        </Row>
        <Row>
          <FiMapPin />
          <h3>R. Minas Gerais, 332 - Higienópolis - SP</h3>
        </Row>
      </Footer>
    </Container>
  );
}

export default Footer;