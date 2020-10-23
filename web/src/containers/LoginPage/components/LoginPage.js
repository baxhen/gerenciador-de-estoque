import React, { Component, memo } from 'react'
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'
import { Field } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import { Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

class LoginPage extends Component {
  state = {
    error: false,
  }

  onSubmit = (formProps) => {
    this.props.dispatchAuthenticate()
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
      pristine,
      submitting,
      formFields,
      theme,
    } = this.props

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
                Já tem conta?
              </Typography>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.blue,
                  textAlign: 'center',
                  marginBottom: '2em',
                }}
              >
                Bem vindo de Volta!
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
                <Grid item container justify="flex-end">
                  <Typography className={classes.linkContainer}>
                    <Link
                      variant="body2"
                      className={classes.forgotPassword}
                      component={RouterLink}
                      to="/recoverPassword"
                    >
                      Esqueceu a senha?
                    </Link>
                  </Typography>
                </Grid>
                <Grid item container justify="center">
                  <Button
                    variant="contained"
                    className={classes.loginButton}
                    disabled={pristine || submitting}
                    type="submit"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              <FormHelperText style={{ textAlign: 'center' }}>
                {signUpErrorMessage}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default memo(LoginPage)
