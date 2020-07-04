import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import { Form, Button, Checkbox, Row, Col, Modal } from 'antd';
import { Container, FormContainer, SessionTitle, ImageContainer } from './styles'
import InputMask from "react-input-mask";
import api from '../../services/api'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { initialState } from '../../utils/initialState'


export default function EditDriver(props) {
  const [drivers] = useContext(AppContext);
  const [formData, setFormData] = useState(initialState);


  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const id = params.get('id');
    const driver = drivers.filter((driver) => driver.id === id)[0];
    setFormData(driver);
  }, [drivers, props.location.search]);


  const ApiSuccess = () => {
    Modal.success({
      title: 'Usuário editado com sucesso',
      content: 'Você será levado de volta a página inicial.',
      onOk() { window.location.href = "/" },
    });
  }

  const handleInputChange = (e, name) => {
    let state = { ...formData }
    state[name] = e.target.value;
    setFormData(state);
  }

  const handleInputChecked = (e) => {
    let state = { ...formData }
    state.cnhType[e.target.value] = !state.cnhType[e.target.value];
    console.log(e.target.checked)
    setFormData(state);
  }

  const handleSubmit = () => {
    api.put("drivers/" + formData.id, formData).then((response) => {
      ApiSuccess();
      console.log(response.data);
    });
  }

  console.log(formData);
  return (
    <Container>
      <ImageContainer>
        {/** <img alt="truck on road" src={truck} />**/}
      </ImageContainer>
      <FormContainer>
        <SessionTitle>
          <Link to="/"><Button type="primary" icon={<FaArrowLeft />} size={'middle'} /></Link>
          Editando motorista
        </SessionTitle>

        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={'large'}
        >
          <Form.Item label="Nome" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira seu nome completo' }]}>
            <input value={formData ? formData.name : ""} className="ant-input ant-input-lg" name="name" onChange={(e) => handleInputChange(e, 'name')} />
          </Form.Item>

          <Form.Item label="Telefone" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira um telefone válido.' }]}>
            <InputMask value={formData ? formData.phone : ""} name="phone" onChange={(e) => handleInputChange(e, 'phone')} className="ant-input ant-input-lg"
              mask="(99) 99999-9999" maskPlaceholder=""
            />
          </Form.Item>

          <Form.Item label="Data de Nascimento" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira uma data válida' }]}>
            <InputMask value={formData ? formData.birth : ""} name="birth" onChange={(e) => handleInputChange(e, 'birth')} className="ant-input ant-input-lg"
              mask="99/99/9999" maskPlaceholder=""
            />
          </Form.Item>

          <Form.Item label="CNH" labelCol={{ span: 24 }} rules={[{ required: true, max: 11, message: 'Insira os 11 digitos da CNH corretamente.' }]}>
            <InputMask value={formData ? formData.cnh : ""} name="cnh" onChange={(e) => handleInputChange(e, 'cnh')} className="ant-input ant-input-lg"
              mask="99999999999" maskPlaceholder=""
            />
          </Form.Item>
          <Form.Item label="Tipo de CNH" labelCol={{ span: 24 }} name="cnhType" rules={[{ required: true, message: 'Selecione ao menos um tipo de CNH.' }]}>
            <Row>
              <Col span={8}>
                <Checkbox checked={formData ? formData.cnhType.A : 1} value="A" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }} >
                  A
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox checked={formData ? formData.cnhType.B : 1} value="B" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  B
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox checked={formData ? formData.cnhType.C : 1} value="C" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  C
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox checked={formData ? formData.cnhType.D : 1} value="D" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  D
              </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox checked={formData ? formData.cnhType.E : 1} value="E" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
                  E
              </Checkbox>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="CPF" labelCol={{ span: 24 }} rules={[{ required: true, message: 'Insira um CPF válido.' }]}>
            <InputMask value={formData ? formData.cpf : ""} name="cpf" onChange={(e) => handleInputChange(e, 'cpf')} className="ant-input ant-input-lg"
              mask="999.999.999-99" maskPlaceholder=""
            />
          </Form.Item>
          <Form.Item className="button-container">
            <Button type="primary" size={'large'} htmlType="submit" onClick={() => handleSubmit()}>
              Editar Motorista
        </Button>
          </Form.Item>
        </Form>
      </FormContainer>
    </Container>
  )
}
