import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../AppContext'
import { Form as FormAntd, Button, Checkbox, Row, Col, Modal } from 'antd';
import { Container, FormContainer, SessionTitle, ImageContainer } from './styles'
import api from '../../services/api'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { initialState } from '../../utils/initialState'
import Input from '../../components/Input'
import InputMask from '../../components/InputMask'
import { Form } from '@unform/web';
import * as Yup from 'yup'


export default function EditDriver(props) {
  const formRef = useRef(null);
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

  const handleSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Insira um nome válido"),
        phone: Yup.string().min(6).required("Insira um telefone de 11 digitos."),
        birth: Yup.string().required("Insira uma data válida."),
        cnh: Yup.string().min(11).required("Insira uma CNH válida com 11 digitos."),
        cpf: Yup.string().min(11).required("Insira um CPF válido com 11 digitos."),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      api.put("drivers/" + formData.id, formData).then((response) => {
        ApiSuccess();
        console.log(response.data);
      });
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
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
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <FormAntd.Item label="Nome" required="true" labelCol={{ span: 24 }}>
            <Input value={formData ? formData.name : ""} className="ant-input ant-input-lg" name="name" onChange={(e) => handleInputChange(e, 'name')} />
          </FormAntd.Item>

          <FormAntd.Item label="Telefone" required="true" labelCol={{ span: 24 }}>
            <InputMask value={formData ? formData.phone : ""} name="phone" onChange={(e) => handleInputChange(e, 'phone')} className="ant-input ant-input-lg"
              mask="(99) 99999-9999" maskPlaceholder=""
            />
          </FormAntd.Item>

          <FormAntd.Item label="Data de Nascimento" required="true" labelCol={{ span: 24 }} >
            <InputMask value={formData ? formData.birth : ""} name="birth" onChange={(e) => handleInputChange(e, 'birth')} className="ant-input ant-input-lg"
              mask="99/99/9999" maskPlaceholder=""
            />
          </FormAntd.Item>

          <FormAntd.Item label="CNH" required="true" labelCol={{ span: 24 }}>
            <InputMask value={formData ? formData.cnh : ""} name="cnh" onChange={(e) => handleInputChange(e, 'cnh')} className="ant-input ant-input-lg"
              mask="99999999999" maskPlaceholder=""
            />
          </FormAntd.Item>
          <FormAntd.Item label="Tipo de CNH" labelCol={{ span: 24 }} name="cnhType">
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
          </FormAntd.Item>
          <FormAntd.Item label="CPF" required="true" labelCol={{ span: 24 }} >
            <InputMask value={formData ? formData.cpf : ""} name="cpf" onChange={(e) => handleInputChange(e, 'cpf')} className="ant-input ant-input-lg"
              mask="999.999.999-99" maskPlaceholder=""
            />
          </FormAntd.Item>
          <FormAntd.Item className="button-container">
            <Button type="primary" size={'large'} htmlType="submit">
              Editar Motorista
            </Button>
          </FormAntd.Item>
        </Form>
      </FormContainer>
    </Container>
  )
}
