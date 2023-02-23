import { useState, ChangeEvent, useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

import { ContainerMain, InputFilter, ContainerListCoffees } from './styles'
import { Card } from '../Card/index'

export function MainCoffee() {
  const { listOfAvailableCoffees } = useContext(CoffeeContext)

  return (
    <ContainerMain>
      <div>
        <p className={'titleOurCoffees'}>Nossos cafés</p>
      </div>
      <ContainerListCoffees>
        {listOfAvailableCoffees.map((coffee) => {
          return <Card availableCoffee={coffee} key={coffee.id} />
        })}
      </ContainerListCoffees>
    </ContainerMain>
  )
}
