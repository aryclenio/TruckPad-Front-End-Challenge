import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import { Container, TitleContainer, SearchContainer, ListContainer, ButtonContainer, NoDriverContainer, ImageContainer } from './styles'
import { Input, Button, Row, Col, Card, Badge } from 'antd';
import image from '../../assets/img/list.svg'
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
    < Container >
      <TitleContainer>
        <h3>Motoristas Cadastrados</h3>
      </TitleContainer>
      <SearchContainer>
        <Search
          placeholder="Procure por alguém"
          enterButton="Buscar"
          size="large"
          onSearch={value => handleSearch(value)}
        />
      </SearchContainer>
      <ListContainer>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            {drivers.length ? drivers.map((driver) => (
              <Col md={24} lg={8} xl={6} key={driver.id}>
                <Card title={driver.name}
                  extra={driver.active ?
                    <Badge className="site-badge-count-109" count={"Ativo"} style={{ backgroundColor: '#FFE699', color: '#474660', borderRadius: '5px' }} /> :
                    <Badge className="site-badge-count-109" count={"Inativo"} style={{ backgroundColor: '#F6F7FF', color: '#474660', borderRadius: '5px' }} />}
                >
                  <h4><span>CPF: </span>{driver.cpf}</h4>
                  <h4><span>Data de Nascimento: </span>{driver.birth}</h4>
                  <h4><span>Telefone: </span>{driver.phone}</h4>
                  <h4><span>CNH: </span>{driver.cnh}</h4>
                  <h4><span>Tipo de CNH: </span>
                    {driver.cnhType.A ? "A" : ""}
                    {driver.cnhType.B ? "B" : ""}
                    {driver.cnhType.C ? "C" : ""}
                    {driver.cnhType.D ? "D" : ""}
                    {driver.cnhType.E ? "E" : ""}
                  </h4>
                  <ButtonContainer>
                    <Link to={"/edit?id=" + driver.id}>
                      <Button className="btn-edit">Editar</Button>
                    </Link>
                  </ButtonContainer>
                </Card>
              </Col>

            ))
              :
              <NoDriverContainer>
                <Col md={24}>
                  <Card>
                    Não conseguimos encontrar motoristas na nossa base de dados. Verifique sua conexão com a internet ou cadastre um motorista.
                </Card>

                </Col>
              </NoDriverContainer>
            }
          </Row>
        </div>
      </ListContainer>
      <ImageContainer>
        <img src={image} alt="ilustration" />
      </ImageContainer>
    </Container >
  )
}
