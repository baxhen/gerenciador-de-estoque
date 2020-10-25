import React, { memo } from 'react'
import { styles } from './styles'

const useStyles = styles

function TakeOff() {
  const classes = useStyles()
  return <main className={classes.content}>TakeOff</main>
}

export default memo(TakeOff)
