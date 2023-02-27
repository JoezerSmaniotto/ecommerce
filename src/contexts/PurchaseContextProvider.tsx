import React, { createContext, useState, ReactNode, useEffect } from 'react'
import Swal from 'sweetalert2'
import { ICoffee } from './CoffeeContext'
import { ISeller } from './SellerContext'
export interface IPurchase {
  id: number
  data: Date
  seller: ISeller
  order: ICoffee[]
  status:
    | 'Aguardando pagamento'
    | 'Pagamento aprovado'
    | 'Cancelada'
    | 'Enviado'
    | 'Entregue'
}

interface Istatus {
  status:
    | 'Aguardando pagamento'
    | 'Pagamento aprovado'
    | 'Cancelada'
    | 'Enviado'
    | 'Entregue'
}

interface PurchaseContextType {
  purchase: IPurchase[]
  updatePurchase: (value: IPurchase) => void
  updateStatus: (id: number, stauts: string) => void
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

  function updateStatus(id: number, stauts: string) {
    console.log('Entrou')
    if (
      [
        'Aguardando pagamento',
        'Pagamento aprovado',
        'Cancelada',
        'Enviado',
        'Entregue',
      ].includes(stauts)
    ) {
      console.log('Entrou IF')
      const newPurchaseStatus = purchase.map((item) => {
        if (item.id === id) {
          return { ...item, status: stauts }
        }
        return item
      })
      console.log('newPurchaseStatus): ', newPurchaseStatus)
      setPurchase(newPurchaseStatus)
      Swal.fire({
        icon: 'success',
        title: 'Status atualizado!',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  return (
    <PurchaseContext.Provider
      value={{
        purchase,
        updatePurchase,
        updateStatus,
        id,
        setId,
      }}
    >
      {children}
    </PurchaseContext.Provider>
  )
}
