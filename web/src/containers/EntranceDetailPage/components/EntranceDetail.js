import React, { memo, useEffect } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography, Chip, Card, CardContent } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function EntranceDetail({
  entrance: { date, entranceId, products, supplier, formOfPayment, totalPrice },
  allProducts,
  allSuppliers,
  dispatchGetProducts,
}) {
  const classes = useStyles()
  const selectProduct = (_id) => {
    const [product] = allProducts.filter((product) => {
      return product._id === _id
    })
    if (product) {
      return product
    } else {
      return { name: 'loading...', productId: 'loading...' }
    }
  }
  const selectSupplier = (_id) => {
    const [supplier] = allSuppliers.filter((supplier) => {
      return supplier._id === _id
    })
    if (supplier) {
      return supplier
    } else {
      return { name: 'loading...',socialReason: 'loading...', CPF: 'loading...', CNPJ: 'loading...', isCompany: true }
    }
  }
  useEffect(() => {
    dispatchGetProducts()
  }, [])
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-entrances')
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
          <Chip label={`ID da entrada: ${entranceId}`} color="primary" className={classes.chips}/>
          <Chip
            label={`Data da Entrada: ${new Date(date).toLocaleDateString('pt-BR')}`}
            color="primary"
            className={classes.chips}
          />
          <Typography variant="h5">
            {products.map(({ product, unitPrice, quantity }) => (             
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {selectProduct(product).name}
                    </Typography>
                    <Typography
                      className={classes.title}
                      gutterBottom
                    >
                      {selectProduct(product).productId}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Preço Unitário: R${unitPrice}
                      <br />
                      Quantidade: {quantity}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Typography>
          <Chip label={`Cliente: ${selectSupplier(supplier).isCompany ? selectSupplier(supplier).socialReason : selectSupplier(supplier).name}`} color="primary" className={classes.chips}/>
          <Chip label={selectSupplier(supplier).isCompany ? "CNPJ: " + selectSupplier(supplier).CNPJ :"CPF: " + selectSupplier(supplier).CPF} color="primary" className={classes.chips}/>
          <br/>
          <Chip label={`Forma de Pagamento: ${formOfPayment}`} color="primary" className={classes.chips}/>
          <br/>
          <Chip label={`Preço Total: R\$${totalPrice}`} color="primary" className={classes.chips}/>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(EntranceDetail)
