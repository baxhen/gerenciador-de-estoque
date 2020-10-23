import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import React, { Component, memo } from 'react'
import { Field } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { CircularProgress } from '@material-ui/core'

import { history } from '../../../history'

class SignUp extends Component {
  state = {
    error: false,
    open: false,
  }

  onSubmit = (formProps) => {
    this.props.dispatchSignUp()
    this.setState({ open: !this.state.open })
  }

  componentDidUpdate(lastProps) {
    if (this.props.signUpErrorMessage !== lastProps.signUpErrorMessage) {
      this.setState({ error: true })
    }
  }

  render() {
    const {
      handleSubmit,
      classes,
      signUpErrorMessage,
      signUpSuccessMessage,
      pristine,
      submitting,
      formFields,
      theme,
      matchesXS,
      matchesSM,
      matchesMD,
    } = this.props

    const onDialogClose = () => {
      this.setState({ open: !this.state.open })
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
                Novo por aqui?
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.blue,
                  textAlign: 'center',
                  marginBottom: '2em',
                }}
              >
                Faça parte de nosso time
              </Typography>
            </Grid>

            <FormControl
              error={this.state.error}
              component="form"
              onSubmit={handleSubmit(this.onSubmit)}
            >
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
                    className={classes.registerButton}
                    disabled={pristine || submitting}
                    type="submit"
                  >
                    Criar Conta
                  </Button>
                </Grid>
              </Grid>
              <FormHelperText style={{ textAlign: 'center' }}>
                {signUpErrorMessage}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Dialog
          open={this.state.open}
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
            {signUpSuccessMessage ? (
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h4" gutterBottom>
                    Email Enviado
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    {signUpSuccessMessage}
                  </Typography>
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
}

export default memo(SignUp)
