import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Container, TitleContainer, SearchContainer, ListContainer, NoDriverContainer } from './styles'
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

  console.log(drivers);

  return (
    < Container >
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
            {drivers.length ? drivers.map((driver) => (
              <Col md={24} lg={8} key={driver.id}>
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

            ))
              :
              <NoDriverContainer>
                <Col md={24}>
                  <Card>
                    Não há motoristas cadastrados em nossa base de dados. Verifique sua conexão com a internet ou cadastre um motorista.
                </Card>

                </Col>
              </NoDriverContainer>
            }
          </Row>
        </div>
      </ListContainer>

    </Container >
  )
}
