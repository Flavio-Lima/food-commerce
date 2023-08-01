import { useContext } from "react"

import { SnackContext } from "../../../context/SnackContext"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export default function Pizzas() {
  const {pizzas} = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' description="Nossas melhores Pizzas" />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )

}
