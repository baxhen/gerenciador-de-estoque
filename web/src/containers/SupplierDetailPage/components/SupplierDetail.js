import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function SupplierDetail({
  supplier: { name, socialReason, contacts, address, description, CPF, CNPJ },
}) {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-suppliers')
        }}
        Icon={ArrowBack}
      >
        Voltar
      </ButtonIcon>
      <Grid container alignItems="center" direction="column">
        <Typography variant="h1">{name || socialReason}</Typography>

        <Typography variant="h2">
          {CPF ? `CPF: ${CPF}` : `CNPJ: ${CNPJ}`}
        </Typography>

        <Typography variant="h3">Descrição:</Typography>
        <Typography variant="h4">{description}</Typography>

        <Grid item>
          <Typography variant="h3">Endereço:</Typography>
          <Typography variant="h4">CEP: {address.CEP}</Typography>
          <br />
          <Typography variant="h4">Estado: {address.state}</Typography>
          <br />
          <Typography variant="h4">Cidade: {address.city}</Typography>
          <br />
          <Typography variant="h4">Bairro: {address.neighborhood}</Typography>
          <br />
          <Typography variant="h4">Rua: {address.street}</Typography>
          <br />
          <Typography variant="h4">Numero: {address.streetNumber}</Typography>
          <br />
          <Typography variant="h3">Contatos:</Typography>
          <Typography variant="h4">Telefone: {contacts.phone}</Typography>
          <br />
          <Typography variant="h4">Email: {contacts.email}</Typography>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(SupplierDetail)
