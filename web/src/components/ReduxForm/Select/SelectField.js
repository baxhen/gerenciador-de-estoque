import React, { useState } from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core'
import { primary } from 'store/theme'

export const SelectField = ({
  label,
  // meta: { error, touched },
  className,
  options,
}) => {
  const [value, setValue] = useState('')
  // const hasError = () => {
  //   if (error && touched) {
  //     return { error: true }
  //   }
  //   return undefined
  // }

  // const showError = () => {
  //   if (error && touched) {
  //     return error
  //   }
  //   return undefined
  // }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <FormControl variant="outlined" color="primary" className={className}>
        <InputLabel id="select-outlined-label">{label}</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="select-outlined"
          value={value}
          onChange={handleChange}
          label={label}
          style={{color: primary}}
        >
          <MenuItem style={{color: primary}} key="default" value="">
            <em>Nenhum</em>
          </MenuItem>
          {options.map(({ value, name }) => (
            <MenuItem style={{color: primary}} key={name} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
