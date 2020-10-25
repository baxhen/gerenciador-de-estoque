import React, { memo } from 'react'
import { styles } from './styles'

const useStyles = styles

function Stock() {
  const classes = useStyles()
  return <main className={classes.content}>StockPage</main>
}

export default memo(Stock)
