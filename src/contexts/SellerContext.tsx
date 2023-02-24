import React, { createContext, useState, ReactNode } from 'react'

export interface ISeller {
  id: string
  CPF: string
  nameSeller: string
}

interface SellerContextType {
  seller: ISeller
  setSeller: React.Dispatch<React.SetStateAction<ISeller>>
}

interface SellerContextProviderProps {
  children: ReactNode
}

export const SellerContext = createContext({} as SellerContextType)

export function SellerContextProvider({
  children,
}: SellerContextProviderProps) {
  const [seller, setSeller] = useState<ISeller>({
    id: '',
    CPF: '',
    nameSeller: '',
  })

  return (
    <SellerContext.Provider
      value={{
        seller,
        setSeller,
      }}
    >
      {children}
    </SellerContext.Provider>
  )
}
