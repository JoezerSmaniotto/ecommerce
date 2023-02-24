import { useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, X, ArrowCircleUp } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import uuid from 'react-uuid'
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
import { PrimaryButton } from '../../../../components/PrimaryButton/index'
import { SellerContext } from '../../../../contexts/SellerContext'

const sellerFormSchema = zod.object({
  CPF: zod
    .string()
    .min(11, 'Insira um CPF valido')
    .regex(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
      'Insira um CPF valido',
    ),
  nameSeller: zod.string().min(1, 'Insira um nome'),
})

type SellerFormInputs = zod.infer<typeof sellerFormSchema>

export function RegisterSeller() {
  const [controllDialog, setControllDialog] = useState(true)
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm<SellerFormInputs>({
    resolver: zodResolver(sellerFormSchema),
    defaultValues: {
      CPF: '',
      nameSeller: '',
    },
  })

  const { setSeller } = useContext(SellerContext)
  function handleRegisterSeller(data: SellerFormInputs) {
    setSeller({ id: uuid(), CPF: data.CPF, nameSeller: data.nameSeller })
    reset()
    setControllDialog(false)
  }

  return (
    <Dialog.Root open={controllDialog}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Cadastre o Vendedor</Dialog.Title>
          <FormContainer onSubmit={handleSubmit(handleRegisterSeller)}>
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
            <PrimaryButton text="Cadastrar" style={{ width: '100%' }} />
          </FormContainer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
