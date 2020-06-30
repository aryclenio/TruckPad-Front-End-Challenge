import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

export default function Home() {
  const [drivers, setDrivers] = useContext(AppContext)

  console.log(drivers)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
