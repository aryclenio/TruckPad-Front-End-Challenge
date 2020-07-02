import React, { useContext } from 'react'
import { AppContext } from '../../AppContext'
import IndexImage from '../../components/IndexImage'
import DriverCreation from '../../components/DriverCreation'

export default function Home() {
  const [drivers] = useContext(AppContext)

  return (
    <>
      <IndexImage />
      <DriverCreation />
    </>
  )
}
