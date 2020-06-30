import React, { useState, useEffect, createContext } from 'react';
import api from './services/api'

export const AppContext = createContext();


export const Provider = (props) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, [])
  const fetchDrivers = () => {
    api.get("drivers").then((response) => {
      setDrivers(response.data);
    });
  };


  return (
    <AppContext.Provider value={[drivers, setDrivers]}>
      {props.children}
    </AppContext.Provider>
  )
}
