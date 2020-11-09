import React, { useState } from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core'
import { primary } from 'store/theme'

export const SelectField = ({
  input,
  label,
  className,
  options,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue ? initialValue : '')
  const handleLocalChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <FormControl variant="outlined" color="primary" className={className}>
      <InputLabel id="select-outlined-label">{label}</InputLabel>
      <Select
        onChange={handleLocalChange}
        value={value}
        {...input}
        labelId="select-outlined-label"
        id="select-outlined"
        label={label}
        style={{ color: primary }}
      >
        <MenuItem style={{ color: primary }} key="default" value="">
          <em>Nenhum</em>
        </MenuItem>
        {options.map(({ value, name }) => (
          <MenuItem style={{ color: primary }} key={name} value={value}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
