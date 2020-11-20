import React, { memo, useEffect } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography, Chip, Card, CardContent } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function TakeOffDetail({
  takeOff: { date, takeOffId, products, client, formOfPayment, totalPrice },
  allProducts,
  allClients,
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
  const selectClient = (_id) => {
    const [client] = allClients.filter((client) => {
      return client._id === _id
    })
    if (client) {
      return client
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
          history.push('dashboard-take-offs')
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
          <Chip label={`ID da saída: ${takeOffId}`} color="primary" className={classes.chips}/>
          <Chip
            label={`Data da Saída: ${new Date(date).toLocaleDateString()}`}
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
          <Chip label={`Cliente: ${selectClient(client).isCompany ? selectClient(client).socialReason : selectClient(client).name}`} color="primary" className={classes.chips}/>
          <Chip label={selectClient(client).isCompany ? "CNPJ: " + selectClient(client).CNPJ :"CPF: " + selectClient(client).CPF} color="primary" className={classes.chips}/>
          <br/>
          <Chip label={`Forma de Pagamento: ${formOfPayment}`} color="primary" className={classes.chips}/>
          <br/>
          <Chip label={`Preço Total: R\$${totalPrice}`} color="primary" className={classes.chips}/>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(TakeOffDetail)
