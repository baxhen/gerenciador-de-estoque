import _ from 'lodash';
import { validateEmail } from 'utils/HelperFunctions';

export const formFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    className: 'input',
    noValueError: 'Digite seu email para fazer login',
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
    className: 'input',
    noValueError: 'Digite sua senha para fazer login',
  },
];

export const validate = (values) => {
  const errors = {};
  errors.email = validateEmail(values.email || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });

  return errors;
};
