import React, { memo, useState } from 'react'
import { Field, FormSection } from 'redux-form'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, FormControl, Button, FormHelperText } from '@material-ui/core'
import { history } from '../../../history'
import { useEffect } from 'react'

const useStyles = styles

function EditClient({
  handleSubmit,
  formFields,
  pristine,
  submitting,
  dispatchEditClient,
  addClientErrorMessage,
  initialize,
  client,
}) {
  const classes = useStyles()
  const [error, setError] = useState(false)

  const onSubmit = (formValues) => {
    dispatchEditClient(formValues)
  }
  useEffect(() => {
    initialize(client)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client])
  useEffect(() => {
    if (addClientErrorMessage) {
      setError(true)
    }
  }, [addClientErrorMessage, setError])
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
        className={classes.formContainer}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <FormControl
            error={error}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item container direction="column">
              {formFields.map(
                ({ label, type, name, className, inputType, contacts }) => {
                  if (
                    (client.isCompany && name === 'CPF') ||
                    (client.isCompany && name === 'name')
                  )
                    return <></>
                  if (
                    (!client.isCompany && name === 'CNPJ') ||
                    (!client.isCompany && name === 'socialReason')
                  )
                    return <></>
                  if (contacts) {
                    return (
                      <FormSection key="contacts" name="contacts">
                        {contacts.map(
                          ({ label, type, name, className, inputType }) => (
                            <Grid
                              item
                              key={name}
                              style={{ marginBottom: '0.5em' }}
                            >
                              <Field
                                component={inputType}
                                label={label}
                                name={name}
                                type={type}
                                className={classes[className]}
                              />
                            </Grid>
                          ),
                        )}
                      </FormSection>
                    )
                  }
                  return (
                    <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                      <Field
                        component={inputType}
                        label={label}
                        name={name}
                        type={type}
                        className={classes[className]}
                      />
                    </Grid>
                  )
                },
              )}
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  className={classes.button}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Atualizar Cliente
                </Button>
              </Grid>
            </Grid>
            <FormHelperText
              style={{
                textAlign: 'center',
                marginBottom: '9.5px',
                marginTop: '9.5px',
              }}
            >
              {addClientErrorMessage}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(EditClient)
