import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Container, TitleContainer, SearchContainer, ListContainer } from './styles'
import { Input, Button, Row, Col, Card, Badge } from 'antd';
import { Link } from 'react-router-dom';
import api from '../../services/api'


export default function DriverList() {
  const { Search } = Input;
  const [drivers, setDrivers] = useContext(AppContext)

  const handleSearch = (value) => {
    api.get("drivers?name=" + value).then((response) => {
      setDrivers(response.data);
    });
  }

  return (
    <Container>
      <TitleContainer>
        <h3>Motoristas Cadastrados</h3>
      </TitleContainer>
      <SearchContainer>
        <Search
          placeholder="Insira o nome do motorista"
          enterButton="Buscar"
          size="large"
          onSearch={value => handleSearch(value)}
        />
      </SearchContainer>
      <ListContainer>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {drivers.map((driver) => (
              <Col md={24} lg={8}>
                <Card title={driver.name}
                  extra={driver.active ?
                    <Badge className="site-badge-count-109" count={"Ativo"} style={{ backgroundColor: '#52c41a' }} /> :
                    <Badge className="site-badge-count-109" count={"Inativo"} />}
                >
                  <h4>{"Telefone: " + driver.phone}</h4>
                  <h4>{"CNH: " + driver.cnh}</h4>
                  <Link to={"/edit?id=" + driver.id}><Button className="btn-edit">Editar</Button></Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </ListContainer>
    </Container >
  )
}
