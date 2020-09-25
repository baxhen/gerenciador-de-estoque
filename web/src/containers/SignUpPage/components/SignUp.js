import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';
import React, { Component, memo } from 'react';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

class SignUp extends Component {
  state = {
    error: false,
  };

  onSubmit = (formProps) => {
    this.props.dispatchSignUp();
  };

  componentDidUpdate(lastProps) {
    if (this.props.errorMessage !== lastProps.errorMessage) {
      this.setState({ error: true });
    }
  }

  render() {
    const {
      handleSubmit,
      classes,
      errorMessage,
      pristine,
      submitting,
      formFields,
      theme,
    } = this.props;

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
                {errorMessage}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default memo(SignUp);
