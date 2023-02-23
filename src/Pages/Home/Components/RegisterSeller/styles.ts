import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from '../../../../components/Input'

export const ContainerHome = styled.div`
  display: flex;
  height: calc(100vh - 10rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FormContainer = styled.form`
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ColumnTitle = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 130%;
`

export const FormInputWrapper = styled.div`
  display: inline;
  width: 100%;
`

export const FormInput = styled(Input)`
  width: 100%;
`
export const InputErrorMessageText = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.error};
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['base-card']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['base-button']};
`
