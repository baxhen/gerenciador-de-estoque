import React from 'react'
import TextField from '@material-ui/core/TextField'

export const InputTextField = ({
  input,
  type,
  label,
  meta: { error, touched },
  className,
  name,
  minValue,
  maxValue,
}) => {
  const hasError = () => {
    if (error && touched) {
      return { error: true }
    }
    return undefined
  }

  const showError = () => {
    if (error && touched) {
      return error
    }
    return undefined
  }

  return (
    <>
      <TextField
        {...input}
        {...hasError()}
        helperText={showError()}
        variant="outlined"
        fullWidth
        InputProps={{ inputProps: { min: minValue, max: maxValue } }}
        type={type}
        label={label}
        id={name}
        name={name}
        className={className}
      />
    </>
  )
}
