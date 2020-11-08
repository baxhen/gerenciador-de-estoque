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
  {
    address: [
      {
        label: 'CEP',
        name: 'CEP',
        type: 'text',
        className: 'input',
        noValueError: 'O CEP do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Estado',
        name: 'state',
        type: 'text',
        className: 'input',
        noValueError: 'O estado do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Cidade',
        name: 'city',
        type: 'text',
        className: 'input',
        noValueError: 'O city do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Bairro',
        name: 'neighborhood',
        type: 'text',
        className: 'input',
        noValueError: 'O bairro do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Rua',
        name: 'street',
        type: 'text',
        className: 'input',
        noValueError: 'A rua do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Numero',
        name: 'streetNumber',
        type: 'text',
        className: 'input',
        noValueError: 'O numero do fornecedor é obrigatório',
        inputType: InputTextField,
      },
      {
        label: 'Complemento',
        name: 'complement',
        type: 'text',
        className: 'input',
        noValueError: 'O complemento do fornecedor é obrigatório',
        inputType: InputTextField,
      },
    ],
  },

  {
    label: 'Descrição do Fornecedor',
    name: 'description',
    type: 'text',
    className: 'input',
    noValueError: 'A descrição do fornecedor é obrigatória',
    inputType: MultilineInputTextField,
  },
]
