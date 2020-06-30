import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext'
import api from '../../services/api'

export default function Home() {
  const [drivers, setDrivers] = useContext(AppContext)

  console.log(drivers);
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
