import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'

export default function CreateDriver() {
  const [drivers, setDrivers] = useContext(AppContext)

  console.log(drivers);
  return (
    <div>
      <h1>Create</h1>
    </div>
  )
}
