import { useContext } from 'react'

import { SnackContext } from '../../../context/SnackContext'

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"

export default function Burgers() {
  const {burgers} = useContext(SnackContext)

  return (
    <>
      <Head title='Hambúrgueres' description="Nossos melhores Burgers" />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
