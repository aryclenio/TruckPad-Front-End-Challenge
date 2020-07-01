import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { Container, SessionTitle } from './styles'
import MaskedInput from 'react-text-mask'


export default function CreateDriver() {
  const [drivers] = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birth: '',
    cnh: '',
    cnhType: {
      A: false,
      B: false,
      C: false,
      D: false,
      E: false
    },
    cpf: ''
  });

  const handleInputChange = (e, name) => {
    let state = { ...formData }
    state[name] = e.target.value;
    setFormData(state);
    console.log(formData)
  }

  const handleInputChecked = (e) => {
    let state = { ...formData }
    state.cnhType[e.target.value] = !state.cnhType[e.target.value];
    setFormData(state);
    console.log(formData)
  }

  const handleSubmit = () => {

  }
  console.log(drivers);
  return (
    <Container>
      <SessionTitle>Cadastro de motoristas</SessionTitle>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={'large'}
      >
        <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Insira seu nome completo.' }]}>
          <Input onChange={(e) => handleInputChange(e, 'name')} />
        </Form.Item>
        <Form.Item label="Telefone" name="phone" rules={[{ required: true, message: 'Insira um telefone válido.' }]}>
          <MaskedInput onChange={(e) => handleInputChange(e, 'phone')} className="ant-input ant-input-lg"
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />
        </Form.Item>
        <Form.Item label="Data de nascimento" name="birth" rules={[{ required: true, message: 'Insira uma data válida.' }]}>
          <MaskedInput onChange={(e) => handleInputChange(e, 'birth')} className="ant-input ant-input-lg"
            mask={[/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        </Form.Item>
        <Form.Item label="CNH" name="cnh" rules={[{ required: true, max: 11, message: 'Insira os 11 digitos da CNH corretamente.' }]}>
          <MaskedInput onChange={(e) => handleInputChange(e, 'cnh')} className="ant-input ant-input-lg"
            mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]}
          />
        </Form.Item>
        <Form.Item label="Tipo de CNH" name="cnhType" rules={[{ required: true, message: 'Selecione ao menos um tipo de CNH.' }]}>
          <Checkbox.Group >
            <Row>
              <Col span={8}>
                <Checkbox value="A" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }} >
                  A
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  B
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  C
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  D
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  E
              </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="CPF" name="cpf" rules={[{ required: true, message: 'Insira um CPF válido.' }]}>
          <MaskedInput onChange={(e) => handleInputChange(e, 'cpf')} className="ant-input ant-input-lg"
            mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
          />
        </Form.Item>
        <Form.Item className="button-container">
          <Button type="primary" shape="round" size={'large'} htmlType="submit">
            Cadastrar Motorista
        </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}
