import { useContext } from 'react'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import {
  IPurchase,
  PurchaseContext,
} from '../../../../contexts/PurchaseContextProvider'
import { priceFormatter } from '../../../../utils/formatter'
import {
  ContainerCardSale,
  CardSaleInfo,
  SubtitleCardSale,
  CardSaleOrder,
  CardSaleStatus,
} from './styles'

interface CardSaleProps {
  dataCardSale: IPurchase
}

export function CardSale({ dataCardSale }: CardSaleProps) {
  const { updateStatus } = useContext(PurchaseContext)

  const total = dataCardSale?.order?.reduce((total, number) => {
    return total + number?.price
  }, 0)

  return (
    <ContainerCardSale>
      <CardSaleInfo>
        <SubtitleCardSale>Inf. Venda</SubtitleCardSale>
        <div>
          <span>Id venda:</span>
          <span>{dataCardSale.id}</span>
          <span>Data pedido:</span>
          <span>
            {new Intl.DateTimeFormat('pt-BR').format(dataCardSale.data)}
          </span>
          <span>Vendedor:</span>
          <span>{dataCardSale?.seller?.nameSeller}</span>
          <span>Total:</span>
          <span>{priceFormatter.format(total)}</span>
        </div>
      </CardSaleInfo>
      <CardSaleOrder>
        <SubtitleCardSale>Items do pedido</SubtitleCardSale>
        <ul>
          {dataCardSale.order.map((coffee) => {
            return <li key={coffee.title}>{coffee.title}</li>
          })}
        </ul>
      </CardSaleOrder>
      <CardSaleStatus>
        <SubtitleCardSale>Status: {dataCardSale.status}</SubtitleCardSale>
        {dataCardSale.status !== 'Entregue' &&
          dataCardSale.status !== 'Cancelada' && (
            <span>Alterar Status do Pedido:</span>
          )}

        <div>
          {dataCardSale.status === 'Aguardando pagamento' ? (
            <>
              <PrimaryButton
                back="sucess"
                backHover="sucess"
                text="Aprovar Pagamento"
                onClick={() => {
                  updateStatus(dataCardSale.id, 'Pagamento aprovado')
                }}
              />
              <PrimaryButton
                back="cancel"
                backHover="cancel"
                text="Cancelar"
                onClick={() => {
                  updateStatus(dataCardSale.id, 'Cancelada')
                }}
              />
            </>
          ) : dataCardSale?.status === 'Pagamento aprovado' ? (
            <>
              <PrimaryButton
                back="sucess"
                backHover="sucess"
                text="Enviado"
                onClick={() => {
                  updateStatus(dataCardSale.id, 'Enviado')
                }}
              />
              <PrimaryButton
                back="cancel"
                backHover="cancel"
                text="Cancelar"
                onClick={() => {
                  updateStatus(dataCardSale.id, 'Cancelada')
                }}
              />
            </>
          ) : dataCardSale.status === 'Enviado' ? (
            <>
              <PrimaryButton
                back="sucess"
                backHover="sucess"
                text="Entregue"
                onClick={() => {
                  updateStatus(dataCardSale.id, 'Entregue')
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </CardSaleStatus>
    </ContainerCardSale>
  )
}
