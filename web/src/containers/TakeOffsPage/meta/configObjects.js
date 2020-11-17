import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { DatePickerField } from 'components/ReduxForm/DatePicker/DatePickerField'

export const formFields = [
  {
    label: 'ID da Saída',
    name: 'takeOffId',
    type: 'text',
    className: 'input',
    // noValueError: 'Digite seu email para fazer login',
    fieldType: InputTextField,
  },
  {
    label: 'Data de Inicio',
    name: 'startDate',
    type: 'text',
    className: 'startDate',
    defaultValue: Date.now(),
    // noValueError: 'Digite seu email para fazer login',
    fieldType: DatePickerField,
  },
  {
    label: 'Data Final',
    name: 'endDate',
    type: 'text',
    className: 'endDate',
    defaultValue: Date.now(),
    // noValueError: 'Digite seu email para fazer login',
    fieldType: DatePickerField,
  },
]
