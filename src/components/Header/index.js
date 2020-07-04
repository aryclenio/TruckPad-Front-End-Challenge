import React from 'react';
import { Layout, Menu } from 'antd';
import truckpad from '../../assets/img/truckpad.svg'


function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <a href="https://www.truckpad.com">
            <img src={truckpad} alt="logo truckpad" style={{ "width": "180px" }} />
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default Header;