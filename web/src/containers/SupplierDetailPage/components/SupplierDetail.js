import React, { memo, useEffect } from 'react'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, Typography, Chip, Card, CardContent } from '@material-ui/core'
import { history } from '../../../history'

const useStyles = styles

function SupplierDetail({
  supplier: { address, contacts, isCompany, socialReason, name, description,CNPJ,CPF },
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
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <Chip label={contacts.email} color="primary" className={classes.chips}/>
          <Chip
            label={contacts.phone}
            color="primary"
            className={classes.chips}
          />
          <Typography variant="h5">           
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {isCompany ? socialReason : name}
                    </Typography>
                    <Typography
                      className={classes.title}
                      gutterBottom
                    >
                      {isCompany ? CNPJ : CPF}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
          </Typography>
          <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Endereço
                    </Typography>
                    <Typography
                      className={classes.title}
                      gutterBottom
                    >
                      CEP: {address.CEP}
                    </Typography>
                    <Typography variant="body2" component="p">
                      Estado: {address.state}
                      <br/>
                      Cidade: {address.city}
                      <br/>
                      Bairro: {address.neighborhood}
                      <br/>
                      Rua: {address.street}, Numero: {address.streetNumber}
                      <br/>
                      {address.complement}
                    </Typography>
                  </CardContent>
                </Card>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(SupplierDetail)
