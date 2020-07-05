import React from 'react';
import { Layout, Menu } from 'antd';
import truckpad from '../../assets/img/truckpad.svg'


function Header() {
  const { Header } = Layout;
  return (
    <Header style={{ "background": "#2D2D2D" }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ "background": "#2D2D2D" }}>
        <Menu.Item key="1">
          <a href="https://www.truckpad.com.br">
            <img src={truckpad} alt="logo truckpad" style={{ "width": "180px" }} />
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Header;