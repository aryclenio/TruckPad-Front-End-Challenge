import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Container, TitleContainer, ImageContainer } from "./styles";
import image from '../../assets/img/driverCreate.svg'

function DriverCreation() {
  return (
    <Container>
      <Row gutter={16}>
        <Col className="gutter-row" md={24} lg={12}>
          <TitleContainer>
            <h3>Realize seu cadastro</h3>
            <h4>É motorista e ainda não se cadastrou? Você pode fazer seu cadastro agora!</h4>
            <Link to="/create">
              <Button type="primary" size={'large'} htmlType="button">
                Cadastrar Motorista
            </Button>
            </Link>
          </TitleContainer>
        </Col>
        <Col className="gutter-row" md={24} lg={12}>
          <ImageContainer>
            <img src={image} alt="ilustration" />
          </ImageContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default DriverCreation;