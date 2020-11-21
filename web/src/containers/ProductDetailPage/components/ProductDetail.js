import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography, Chip, Card, CardContent } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function ProductDetail({
  product: { productId, name, description, category },
  categories,
}) {
  const classes = useStyles()
  const selectCategory = (_id) => {
    const [category] = categories.filter((category) => {
      return category._id === _id
    })
    if (category) {
      return category
    } else {
      return { name: 'loading...' }
    }
  }
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
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Chip
            label={`ID do Produto: ${productId}`}
            color="primary"
            className={classes.chips}
          />
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography className={classes.title} gutterBottom>
                {`Categoria: ${selectCategory(category).name}`}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(ProductDetail)
