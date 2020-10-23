import React, { memo } from 'react'
import { Grid } from '@material-ui/core'

import { styles } from './styles'

const useStyles = styles

function Home() {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      Home
    </Grid>
  )
}

export default memo(Home)
