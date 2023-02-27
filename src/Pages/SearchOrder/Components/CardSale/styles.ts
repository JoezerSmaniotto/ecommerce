import styled from 'styled-components'

export const ContainerCardSale = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  background: ${(props) => props.theme['base-card']};
  padding: 1rem;
  border-radius: 8px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const CardSaleInfo = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`
export const SubtitleCardSale = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  text-align: start;
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CardSaleOrder = styled.div`
  ul {
    margin-left: 1rem;
  }
`
export const CardSaleStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  div {
    display: flex;
    gap: 0.5rem;
  }
`
