import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { Container, SessionTitle } from './styles'

export default function CreateDriver() {
  const [drivers] = useContext(AppContext)

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
        <Form.Item label="Nome" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Telefone" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Data de nascimento" name="birth">
          <DatePicker />
        </Form.Item>
        <Form.Item label="CNH" name="cnh">
          <Input />
        </Form.Item>
        <Form.Item label="Tipo de CNH" name="cnhType">
          <Select>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
            <Select.Option value="C">C</Select.Option>
            <Select.Option value="D">D</Select.Option>
            <Select.Option value="E">E</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="CPF" name="cpf">
          <Input />
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
