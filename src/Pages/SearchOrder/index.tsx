import { useState, ChangeEvent, useContext, useEffect } from 'react'
import { ContainerSearchOrder, ContainerSearch, ContainerSales } from './styles'
import { Input } from '../../components/Input/index'
import { PurchaseContext } from '../../contexts/PurchaseContextProvider'
import { CardSale } from './Components/CardSale'

export function SearchOrder() {
  const [filterOrder, setFilterOrder] = useState('')
  const { purchase } = useContext(PurchaseContext)

  function handleSearchOrderId(event: ChangeEvent<HTMLInputElement>) {
    setFilterOrder(event.target.value)
  }

  const filterPurchase =
    purchase?.length > 0
      ? purchase.filter((item) => {
          if (item.id === Number(filterOrder)) {
            return item
          }
        })
      : []

  return (
    <ContainerSearchOrder>
      <ContainerSearch>
        <Input
          placeholder="Informe o id Compra"
          type="text"
          value={filterOrder}
          onChange={handleSearchOrderId}
        />

        <ContainerSales>
          {purchase?.length > 0 &&
            filterPurchase?.length === 0 &&
            purchase.map((item) => {
              return <CardSale key={item.id} dataCardSale={item} />
            })}
          {filterPurchase?.length > 0 &&
            filterPurchase.map((item) => {
              return <CardSale key={item.id} dataCardSale={item} />
            })}
        </ContainerSales>
      </ContainerSearch>
    </ContainerSearchOrder>
  )
}
