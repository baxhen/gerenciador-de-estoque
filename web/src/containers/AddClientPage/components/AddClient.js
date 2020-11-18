import React, { memo, useState } from 'react'
import { Field, FormSection } from 'redux-form'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import {
  Grid,
  FormControl,
  Button,
  FormHelperText,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import { history } from '../../../history'
import { useEffect } from 'react'

const useStyles = styles

function AddClient({
  handleSubmit,
  formFields,
  pristine,
  submitting,
  addClientErrorMessage,
  dispatchAddClient,
}) {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [isCompany, setIsCompany] = useState(true)

  const handleIsCompanyChange = (e) => {
    setIsCompany(!isCompany)
  }

  const onSubmit = (formValues) => {
    dispatchAddClient({ ...formValues, isCompany })
  }
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
              <Grid
                item
                key="isCompany"
                style={{ marginBottom: '0.5em', alignSelf: 'center' }}
              >
                <FormControlLabel
                  control={
                    <Switch
                      checked={isCompany}
                      onChange={handleIsCompanyChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="É Pessoa Jurídica?"
                />
              </Grid>
              {formFields.map(
                ({ label, type, name, className, inputType, contacts }) => {
                  if (
                    (isCompany && name === 'CPF') ||
                    (isCompany && name === 'name')
                  )
                    return <></>
                  if (
                    (!isCompany && name === 'CNPJ') ||
                    (!isCompany && name === 'socialReason')
                  )
                    return <></>
                  if (contacts) {
                    return (
                      <FormSection key="contacts" name="contacts">
                        {contacts.map(
                          ({ label, type, name, className, inputType }) => {
                            return (
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
                            )
                          },
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
                  Cadastrar Cliente
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

export default memo(AddClient)
