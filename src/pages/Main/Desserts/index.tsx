import { useContext } from "react"

import { SnackContext } from "../../../context/SnackContext"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Desserts() {
  const {desserts} = useContext(SnackContext)

  return (
    <>
    <Head title='Sobremesas' description="Nossas melhores Sobremesas" />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={desserts}></Snacks>
    </>
  )



}
