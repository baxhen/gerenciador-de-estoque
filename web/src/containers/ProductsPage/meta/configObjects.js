import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
// import { SelectField } from 'components/ReduxForm/Select/SelectField'

export const formFields = [
  {
    label: 'ID do Produto',
    name: 'productId',
    type: 'text',
    className: 'productIdInput',
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
  // {
  //   label: 'Categoria',
  //   name: 'category',
  //   type: 'select',
  //   className: 'categorySelect',
  //   // noValueError: 'Digite seu email para fazer login',
  //   fieldType: SelectField,
  // },
]
