import React, { memo } from 'react'
import { styles } from './styles'

const useStyles = styles

function Entrances() {
  const classes = useStyles()
  return <main className={classes.content}>Entrances</main>
}

export default memo(Entrances)
