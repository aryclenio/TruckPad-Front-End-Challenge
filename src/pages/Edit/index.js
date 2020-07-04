import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../AppContext'
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { initialState } from '../../utils/initialState'
import InputMask from "../../components/InputMask";
import { Checkbox, Row, Col, Modal } from 'antd';
import * as Yup from 'yup'


export default function Edit(props) {
  const formRef = useRef(null);
  const [drivers] = useContext(AppContext);
  const [cnhType, setCnhType] = useState({ a: false, b: false, c: false, d: false, e: false });
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const id = params.get('id');
    const driver = drivers.filter((driver) => driver.id === id)[0];
    console.log(driver)
    setFormData(driver);
  }, [drivers, props.location.search]);

  const handleInputChecked = (e) => {
    let state = { ...cnhType }
    state[e.target.value] = !state[e.target.value];
    console.log(state)
    setCnhType(state);
  }

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required("Insira um nome válido"),
        phone: Yup.string().min(6).required("Insira um telefone de 11 digitos."),
        birth: Yup.string().min(11).required("Insira uma data válida."),
        cnh: Yup.string().min(11).required("Insira uma CNH válida com 11 digitos."),
        cpf: Yup.string().min(11).required("Insira um CPF válido com 11 digitos."),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
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
  return (
    <Form onSubmit={handleSubmit} ref={formRef} >
      <Input defaultValue={formData ? formData.name : ""} name="name" type="text" className="ant-input ant-input-lg" />
      <InputMask value={formData ? formData.phone : ""} name="phone" className="ant-input ant-input-lg"
        mask="(99) 99999-9999" maskPlaceholder=""
      />
      <InputMask defaultValue={formData ? formData.birth : ""} name="birth" className="ant-input ant-input-lg"
        mask="99/99/9999" maskPlaceholder=""
      />
      <InputMask defaultValue={formData ? formData.cnh : ""} name="cnh" className="ant-input ant-input-lg"
        mask="99999999999" maskPlaceholder=""
      />
      <Row>
        <Col span={8}>
          <Checkbox checked={cnhType ? cnhType.a : 1} value="a" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }} >
            A
              </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={cnhType ? cnhType.b : 1} value="b" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
            B
              </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={cnhType ? cnhType.c : 1} value="c" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
            C
              </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={cnhType ? cnhType.d : 1} value="d" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
            D
              </Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox checked={cnhType ? cnhType.e : 1} value="e" onChange={(e) => handleInputChecked(e)} style={{ lineHeight: '32px' }}>
            E
              </Checkbox>
        </Col>
      </Row>
      <InputMask defaultValue={formData ? formData.cpf : ""} name="cpf" className="ant-input ant-input-lg"
        mask="999.999.999-99" maskPlaceholder=""
      />
      <button type="submit">Sign in</button>
    </Form>
  )
}
