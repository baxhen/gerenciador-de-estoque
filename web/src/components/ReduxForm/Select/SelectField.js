import React, { useState } from 'react'
import { Select, InputLabel, MenuItem, FormControl } from '@material-ui/core'
import { primary } from 'store/theme'

export const SelectField = ({
  input,
  label,
  className,
  options,
}) => {
  const [value, setValue] = useState('')
  const handleLocalChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <FormControl variant="outlined" color="primary" className={className}>
      <InputLabel id="select-outlined-label">{label}</InputLabel>
      <Select
        {...input}
        labelId="select-outlined-label"
        id="select-outlined"
        value={value}
        onChange={handleLocalChange}
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
