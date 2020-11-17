import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function ClientDetail({
  client: { name, socialReason, contacts, CPF, CNPJ },
}) {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-clients')
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

        <Grid item>
          <Typography variant="h3">Contatos:</Typography>
          <Typography variant="h4">Telefone: {contacts.phone}</Typography>
          <br />
          <Typography variant="h4">Email: {contacts.email}</Typography>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(ClientDetail)
