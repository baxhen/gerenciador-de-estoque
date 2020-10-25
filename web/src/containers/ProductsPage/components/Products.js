import React, { memo } from 'react'
import { styles } from './styles'

const useStyles = styles

function Products() {
  const classes = useStyles()
  return <main className={classes.content}>Products</main>
}

export default memo(Products)
