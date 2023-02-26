import { useState, ChangeEvent, useEffect, useContext } from 'react'
import { ContainerSearchOrder, ContainerSearch } from './styles'
import { Input } from '../../components/Input/index'
import { PurchaseContext } from '../../contexts/PurchaseContextProvider'

export function SearchOrder() {
  const [filterOrder, setFilterOrder] = useState('')
  const { purchase } = useContext(PurchaseContext)

  function handleSearchOrderId(event: ChangeEvent<HTMLInputElement>) {
    setFilterOrder(event.target.value)
  }

  useEffect(() => {
    console.log('purchase: ', purchase)
  }, [purchase])
  return (
    <ContainerSearchOrder>
      <ContainerSearch>
        <Input
          placeholder="Informe o id Compra"
          type="text"
          value={filterOrder}
          onChange={handleSearchOrderId}
        />
      </ContainerSearch>
    </ContainerSearchOrder>
  )
}
