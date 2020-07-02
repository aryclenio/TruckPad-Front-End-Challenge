import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Form, Input, Button, Checkbox, Row, Col, Modal } from 'antd';
import { Container, FormContainer, SessionTitle, ImageContainer } from './styles'
import MaskedInput from 'react-text-mask'
import api from '../../services/api'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function CreateDriver() {
  const [drivers] = useContext(AppContext);
  const [formData, setFormData] = useState({});

  const ApiSuccess = () => {
    Modal.success({
      title: 'Usuário cadastrado com sucesso',
      content: 'Você será levado de volta a página inicial.',
      onOk() { window.location.href = "/" },
    });
  }

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
    api.post("drivers", formData).then((response) => {
      ApiSuccess();
      console.log(response.data);
    });
  }
  console.log(drivers);
  return (
    <Container>
      <ImageContainer>
        {/** <img alt="truck on road" src={truck} />**/}
      </ImageContainer>
      <FormContainer>
        <SessionTitle>
          <Link to="/"><Button type="primary" icon={<FaArrowLeft />} size={'middle'} /></Link>
          Cadastro de motoristas
        </SessionTitle>

        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={'large'}
        >
          <Form.Item label="Nome" name="name" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira seu nome completo.' }]}>
            <Input onChange={(e) => handleInputChange(e, 'name')} />
          </Form.Item>
          <Form.Item label="Telefone" name="phone" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira um telefone válido.' }]}>
            <MaskedInput onChange={(e) => handleInputChange(e, 'phone')} className="ant-input ant-input-lg"
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            />
          </Form.Item>
          <Form.Item label="Data de nascimento" labelCol={{ span: 24 }} name="birth" rules={[{ required: true, message: 'Insira uma data válida.' }]}>
            <MaskedInput onChange={(e) => handleInputChange(e, 'birth')} className="ant-input ant-input-lg"
              mask={[/[1-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
            />
          </Form.Item>
          <Form.Item label="CNH" name="cnh" labelCol={{ span: 24 }} rules={[{ required: true, max: 11, message: 'Insira os 11 digitos da CNH corretamente.' }]}>
            <MaskedInput onChange={(e) => handleInputChange(e, 'cnh')} className="ant-input ant-input-lg"
              mask={[/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,]}
            />
          </Form.Item>
          <Form.Item label="Tipo de CNH" labelCol={{ span: 24 }} name="cnhType" rules={[{ required: true, message: 'Selecione ao menos um tipo de CNH.' }]}>
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
          <Form.Item label="CPF" labelCol={{ span: 24 }} name="cpf" rules={[{ required: true, message: 'Insira um CPF válido.' }]}>
            <MaskedInput onChange={(e) => handleInputChange(e, 'cpf')} className="ant-input ant-input-lg"
              mask={[/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
            />
          </Form.Item>
          <Form.Item className="button-container">
            <Button type="primary" size={'large'} htmlType="button" onClick={() => handleSubmit()}>
              Cadastrar Motorista
        </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  )
}
