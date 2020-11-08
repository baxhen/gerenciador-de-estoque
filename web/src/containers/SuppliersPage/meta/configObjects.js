import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
// import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  {
    label: 'Razão Social/Nome',
    name: 'socialReason',
    type: 'text',
    className: 'input',
    // noValueError: 'Digite seu email para fazer login',
    fieldType: InputTextField,
  },
  {
    label: 'CNPJ/CPF',
    name: 'CNPJ',
    type: 'text',
    className: 'lastInput',
    // noValueError: 'Digite seu email para fazer login',
    fieldType: InputTextField,
  },
  // {
  //   label: 'Categoria',
  //   name: 'category',
  //   type: 'select',
  //   className: 'categorySelect',
  //   // noValueError: 'Digite seu email para fazer login',
  //   fieldType: SelectField,
  // },
]
