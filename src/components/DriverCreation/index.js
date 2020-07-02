import React from 'react';
import { Row, Col, Button } from 'antd';
import { TitleContainer } from "./styles";

function DriverCreation() {
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <TitleContainer>
          <h3>Realize seu cadastro</h3>
          <h4>É motorista e ainda não se cadastrou? Você pode fazer seu cadastro agora!</h4>
          <Button type="primary" size={'large'} htmlType="button">
            Cadastrar Motorista
          </Button>
        </TitleContainer>
      </Col>
      <Col className="gutter-row" span={12}>
        <div ></div>
      </Col>
    </Row>
  );
}

export default DriverCreation;