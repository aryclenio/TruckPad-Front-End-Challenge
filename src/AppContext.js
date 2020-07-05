import React, { useState, useEffect, createContext } from 'react';
import api from './services/api'
import { SortBy } from './utils/functions'
import { Modal } from 'antd';

export const AppContext = createContext();


export const Provider = (props) => {
  const [drivers, setDrivers] = useState([]);

  const fetchDrivers = () => {
    api.get("drivers")
      .then((response) => {
        setDrivers(response.data.sort(SortBy("name")));
      })
      .catch(error => {
        Modal.error({
          title: 'Falha na comunicação com o servidor',
          content: 'Verifique sua conexão com a internet e tente novamente.',
          onOk() { window.location.href = "/" },
        });
      });
  };

  useEffect(() => {
    fetchDrivers();
  }, [])

  return (
    <AppContext.Provider value={[drivers, setDrivers]}>
      {props.children}
    </AppContext.Provider>
  )
}
