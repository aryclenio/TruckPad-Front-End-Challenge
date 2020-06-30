import React, { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();


export const Provider = (props) => {
  const [drivers, setDrivers] = useState([
    {
      "name": "Aryclenio Barros",
      "phone": "(84)99982-8379",
      "birth": "21/10/1997",
      "cnh": "003434324",
      "cnhType": "A",
      "cpf": "106.048.764-61"
    },
    {
      "name": "Aryclenio Barros",
      "phone": "(84)99982-8379",
      "birth": "21/10/1997",
      "cnh": "003434324",
      "cnhType": "A",
      "cpf": "106.048.764-61"
    }
  ]);

  return (
    <AppContext.Provider value={[drivers, setDrivers]}>
      {props.children}
    </AppContext.Provider>
  )
}
