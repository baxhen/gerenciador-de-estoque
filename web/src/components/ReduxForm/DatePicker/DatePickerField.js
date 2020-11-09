import 'date-fns'
import React from 'react'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

export const DatePickerField = ({
  input: { onChange },
  label,
  className,
}) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(Date.now()))
  const handleDateChange = (date) => {
    setSelectedDate(new Date(date))
    onChange(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        disableToolbar
        variant="inline"
        color="primary"
        format="dd/MM/yyyy"
        margin="dense"
        id="date-picker-inline"
        label={label}
        KeyboardButtonProps={{
          'aria-label': 'change date',
          color: 'primary',
        }}
        className={className}
      />
    </MuiPickersUtilsProvider>
  )
}
