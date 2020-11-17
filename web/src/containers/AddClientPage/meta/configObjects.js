import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { MultilineInputTextField } from 'components/ReduxForm/TextInput/MultilineInputTextField'
// import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  {
    label: 'Razão Social',
    name: 'socialReason',
    type: 'text',
    className: 'input',
    noValueError: 'A razão social do fornecedor é obrigatório',
    inputType: InputTextField,
  },
  {
    label: 'Nome',
    name: 'name',
    type: 'text',
    className: 'input',
    noValueError: 'O nome do fornecedor é obrigatório',
    inputType: InputTextField,
  },
  {
    label: 'CNPJ',
    name: 'CNPJ',
    type: 'text',
    className: 'input',
    noValueError: 'O CNPJ do fornecedor é obrigatório',
    inputType: InputTextField,
  },
  {
    label: 'CPF',
    name: 'CPF',
    type: 'text',
    className: 'input',
    noValueError: 'O CPF do fornecedor é obrigatório',
    inputType: InputTextField,
  },
  {
    contacts: [
      {
        label: 'Email',
        name: 'email',
        type: 'text',
        className: 'input',
        noValueError: 'O email do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Telefone',
        name: 'phone',
        type: 'text',
        className: 'input',
        noValueError: 'O telefone do fornecedor é obrigatório',
        inputType: InputTextField,
      },
    ],
  },
]
