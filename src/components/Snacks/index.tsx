import { FiPlus } from 'react-icons/fi'

import { currencyFormat } from '../../helpers/currencyFormat'
import { SnackData } from '../../Interfaces/SnackDate'
import { useCart } from '../../hooks/useCart'

import { SkeletonSnack } from './SkeletonSnack'

import { Container } from "./styles"


interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1,2,3,4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => (
            <div key={snack.id} className="snack">
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{currencyFormat(snack.price)}</strong>
                <button type="button" onClick={() => addSnackIntoCart(snack)}>
                  <FiPlus />
                </button>
              </div>
            </div>
        ))}
    </Container>
  )
}
