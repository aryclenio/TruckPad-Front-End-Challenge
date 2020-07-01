import React from 'react';
import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom'
import truckpad from '../../assets/img/truckpad.svg'


function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><img src={truckpad} alt="logo truckpad" style={{ "width": "125px" }} /></Menu.Item>
        <Menu.Item key="2"><Link to="/">Motoristas Cadastrados</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/create">Cadastrar Motorista</Link></Menu.Item>
      </Menu>
    </Header>
  )
}

export default Header;