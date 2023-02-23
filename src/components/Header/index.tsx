import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, LinkCardButton } from './styles'

import logoCoffee from '../../assets/logo_coffee.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo " />

      <div>
        <span>
          <MapPin size={22} weight="fill" />
        </span>

        <LinkCardButton disabled>
          <ShoppingCart size={22} weight="fill" />
        </LinkCardButton>
      </div>
    </HeaderContainer>
  )
}
