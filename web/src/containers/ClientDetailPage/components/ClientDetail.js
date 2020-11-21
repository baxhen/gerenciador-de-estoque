import React, { memo } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function ClientDetail({
  client: { contacts, isCompany, socialReason, name, description, CNPJ, CPF },
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
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h5">
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {isCompany ? socialReason : name}
                </Typography>
                <Typography className={classes.title} gutterBottom>
                  {isCompany ? `CNPJ: ${CNPJ}` : `CPF: ${CPF}`}
                </Typography>
                <Typography variant="body2" component="p">
                  Email: {contacts.email} <br />
                  Telefone: {contacts.phone}
                </Typography>
              </CardContent>
            </Card>
          </Typography>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(ClientDetail)
