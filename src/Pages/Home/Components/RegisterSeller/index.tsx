import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, X, ArrowCircleUp } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  ContainerHome,
  FormContainer,
  ColumnTitle,
  FormInputWrapper,
  FormInput,
  InputErrorMessageText,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { PrimaryButton } from '../../../../components/PrimaryButton/index'

const sellerFormSchema = zod.object({
  CPF: zod
    .string()
    .min(11, 'Insira um CPF valido')
    .regex(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
      'Insira um CPF valido',
    ),
  nameSeller: zod.string().min(1, 'Insira a rua do endereço de entrega'),
})

type SellerFormInputs = zod.infer<typeof sellerFormSchema>

export function RegisterSeller() {
  const { handleSubmit, control, setValue, watch, setError, clearErrors } =
    useForm<SellerFormInputs>({
      resolver: zodResolver(sellerFormSchema),
      defaultValues: {
        CPF: '',
        nameSeller: '',
      },
    })

  function handleRegisterSeller(data: SellerFormInputs) {
    console.log('data: ', data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Cadastre o Vendedor</Dialog.Title>
        {/* <CloseButton>
          <X size={24} />
        </CloseButton> */}
        <FormContainer onSubmit={handleSubmit(handleRegisterSeller)}>
          <Controller
            control={control}
            name="CPF"
            render={({ field, fieldState }) => {
              return (
                <FormInputWrapper>
                  <FormInput
                    placeholder="CPF"
                    value={field.value}
                    onChange={(event) => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                  {fieldState.error && (
                    <InputErrorMessageText>
                      {fieldState.error.message}
                    </InputErrorMessageText>
                  )}
                </FormInputWrapper>
              )
            }}
          />
          <Controller
            control={control}
            name="nameSeller"
            render={({ field, fieldState }) => {
              return (
                <FormInputWrapper>
                  <FormInput
                    placeholder="Nome Completo"
                    value={field.value}
                    onChange={(event) => {
                      const inputValue = event.target.value
                      field.onChange(inputValue)
                    }}
                  />
                  {fieldState.error && (
                    <InputErrorMessageText>
                      {fieldState.error.message}
                    </InputErrorMessageText>
                  )}
                </FormInputWrapper>
              )
            }}
          />
          <PrimaryButton text="Cadastrar" style={{ width: '100%' }} />
        </FormContainer>
      </Content>
    </Dialog.Portal>
  )
}
