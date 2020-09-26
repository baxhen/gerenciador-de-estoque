import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField';
import { Field } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { usePrevious } from 'hooks/usePrevious';

function RecoverPassword(props) {
  const {
    handleSubmit,
    errorMessage,
    pristine,
    submitting,
    formFields,
    dispatchRecoverPassword,
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [error, setError] = useState(false);
  const prevErrorMessage = usePrevious(errorMessage);

  const onSubmit = ({ email }) => {
    dispatchRecoverPassword(email);
  };

  useEffect(() => {
    if (errorMessage !== prevErrorMessage) {
      setError(!error);
    }
  }, [error, errorMessage, prevErrorMessage]);
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
              Redefinir Senha
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.blue,
                textAlign: 'center',
                marginBottom: '2em',
              }}
            >
              Digite o seu email para redefinirmos a sua senha
            </Typography>
          </Grid>

          <FormControl
            error={error}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
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
                  className={classes.recoverButton}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Recuperar Senha
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

export default RecoverPassword;
