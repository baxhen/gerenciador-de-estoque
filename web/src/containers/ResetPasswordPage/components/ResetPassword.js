import React, { useState, memo } from 'react'
import useStyles from './styles'
import { useTheme } from '@material-ui/core/styles'
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { Field } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import FormControl from '@material-ui/core/FormControl'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { useParams } from 'react-router-dom'
import { CircularProgress, useMediaQuery } from '@material-ui/core'

function ResetPassword(props) {
  const classes = useStyles()
  const theme = useTheme()
  const { token, email } = useParams()
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const {
    handleSubmit,
    resetPasswordMessage,
    pristine,
    submitting,
    formFields,
    dispatchResetPassword,
    history,
  } = props

  const [open, setOpen] = useState(false)

  const onSubmit = (formProps) => {
    formProps.token = token
    formProps.email = email
    dispatchResetPassword()
    setOpen(!open)
  }

  const onDialogClose = () => {
    setOpen(!open)
    history.push('/login')
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.background}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              Criar Nova Senha
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.blue,
                textAlign: 'center',
                marginBottom: '2em',
              }}
            >
              Cadastre a sua nova senha
            </Typography>
          </Grid>

          <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid item container direction="column">
              {formFields.map(({ label, type, name, className }) => (
                <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                  <Field
                    component={InputTextField}
                    label={label}
                    name={name}
                    type={type}
                    className={classes[className]}
                  />
                </Grid>
              ))}

              <Grid item container justify="center">
                <Button
                  variant="contained"
                  className={classes.recoverButton}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Redefinir Senha
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={onDialogClose}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '10em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '10em',
          },
        }}
      >
        <DialogContent>
          {resetPasswordMessage ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Redefinição de Senha
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{resetPasswordMessage}</Typography>
              </Grid>
            </Grid>
          ) : (
            <CircularProgress />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  )
}

export default memo(ResetPassword)
