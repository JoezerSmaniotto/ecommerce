import React, { createContext, useState, ReactNode } from 'react'
import { ICoffee } from './CoffeeContext'
import { ISeller } from './SellerContext'

export interface IPurchase {
  id: number
  data: Date
  seller: ISeller
  order: ICoffee[]
  status:
    | 'Aguardando pagamento'
    | 'Pagamento Aprovado'
    | 'Cancelada'
    | 'Enviado'
    | 'Entregue'
}

interface PurchaseContextType {
  purchase: IPurchase[]
  updatePurchase: (value: IPurchase) => void
  id: number
  setId: React.Dispatch<React.SetStateAction<number>>
}

interface PurchaseContextProviderProps {
  children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({
  children,
}: PurchaseContextProviderProps) {
  const [purchase, setPurchase] = useState<IPurchase[]>([])
  const [id, setId] = useState<number>(1)

  function updatePurchase(value: IPurchase) {
    setPurchase([...purchase, value])
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchase,
        updatePurchase,
        id,
        setId,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
