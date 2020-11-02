import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { history } from '../../../history'
import { Grid, Typography } from '@material-ui/core'

const useStyles = styles

function ProductDetail({ product, categories }) {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-products')
        }}
        Icon={ArrowBack}
      >
        Voltar
      </ButtonIcon>
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h1">{product.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">ID: {product.productId}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">
            Categoria:
            {
              categories.filter(
                (category) => category._id === product.category,
              )[0].name
            }
          </Typography>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(ProductDetail)
