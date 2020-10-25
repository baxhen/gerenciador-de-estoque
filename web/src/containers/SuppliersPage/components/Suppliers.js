import React, { memo } from 'react'
import { styles } from './styles'

const useStyles = styles

function Suppliers() {
  const classes = useStyles()
  return <main className={classes.content}>Suppliers</main>
}

export default memo(Suppliers)
