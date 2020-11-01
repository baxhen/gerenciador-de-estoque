import React, { memo } from 'react'
import { styles } from './styles'
import { Button } from '@material-ui/core'

const useStyles = styles

function Products({ Icon, onClick, children, type, disabled }) {
  const classes = useStyles()
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<Icon />}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default memo(Products)
