import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Container, TitleContainer, ListContainer } from './styles'
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function DriverList() {
  const { Search } = Input;
  const [drivers] = useContext(AppContext)

  return (
    <Container>
      <TitleContainer>
        <h3>Motoristas Cadastrados</h3>
      </TitleContainer>
      <ListContainer>
        <Search
          placeholder="Insira o nome"
          enterButton="Buscar"
          size="large"
          onSearch={value => console.log(value)}
        />
        {drivers.map((driver) => (
          <Link to={"/edit?id=" + driver.id}><Button>Editar</Button></Link>
        ))}
      </ListContainer>
    </Container>
  )
}
