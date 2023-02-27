import styled from 'styled-components'

interface ContProps {
  back: string
  backHover: string
}

export const PrimaryButtonContainer = styled.button<ContProps>`
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.backHover === 'sucess'
      ? props.theme.success
      : props.backHover === 'cancel'
      ? props.theme.cancel
      : props.theme.yellow};
  border: none;
  padding: 0.75rem 2.8125rem; // 45px
  border-radius: 6px;
  transition-duration: 0.1s;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.backHover === 'sucess'
        ? props.theme.success
        : props.backHover === 'cancel'
        ? props.theme.cancel
        : props.theme['yellow-dark']};
    border: none;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
