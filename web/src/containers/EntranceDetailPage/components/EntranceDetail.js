import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function EntranceDetail({
  entrance: { date, entranceId, products, supplier, formOfPayment, totalPrice },
}) {
  const classes = useStyles()
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
      <Grid container alignItems="center" direction="column">
        <Typography variant="h1">ID: {entranceId}</Typography>

        <Typography variant="h2">
          Data da Entrada: {new Date(date).toLocaleDateString()}
        </Typography>
        <Typography variant="h3">Produtos:</Typography>
        {products.map(({ product, unitPrice, quantity }) => (
          <>
            <Typography variant="h3">ID do Produto:{product}</Typography>
            <Typography variant="h3">Preço Unitário:{unitPrice}</Typography>
            <Typography variant="h3">Quantidade:{quantity}</Typography>
          </>
        ))}

        <Typography variant="h3">ID Fornecedor: {supplier}</Typography>
        <Typography variant="h3">
          Forma de Pagamento: {formOfPayment}
        </Typography>
        <Typography variant="h3">Preço Total: {totalPrice}</Typography>
      </Grid>
    </main>
  )
}

export default memo(EntranceDetail)
