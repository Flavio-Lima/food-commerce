import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getDrinks } from "../../../services/api"
import { SnackData } from "../../../Interfaces/SnackDate"

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' description="Nossas melhores Bebidas" />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={drinks}></Snacks>
    </>
  )

}
