import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'

export const formFields = [
  {
    label: 'ID do Produto',
    name: 'productId',
    type: 'text',
    className: 'input',
    // noValueError: 'Digite seu email para fazer login',
    fieldType: InputTextField,
  },
  {
    label: 'Nome',
    name: 'name',
    type: 'text',
    className: 'input',
    // noValueError: 'Digite seu email para fazer login',
    fieldType: InputTextField,
  },
]
