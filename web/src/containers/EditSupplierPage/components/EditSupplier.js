import React, { memo, useState } from 'react'
import { Field, FormSection } from 'redux-form'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack } from '@material-ui/icons'
import { Grid, FormControl, Button, FormHelperText } from '@material-ui/core'
import { history } from '../../../history'
import { useEffect } from 'react'

const useStyles = styles

function EditSupplier({
  handleSubmit,
  formFields,
  pristine,
  submitting,
  dispatchEditSupplier,
  addSupplierErrorMessage,
  initialize,
  supplier,
}) {
  const classes = useStyles()
  const [error, setError] = useState(false)

  const onSubmit = (formValues) => {
    dispatchEditSupplier(formValues)
  }
  useEffect(() => {
    initialize(supplier)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supplier])
  useEffect(() => {
    if (addSupplierErrorMessage) {
      setError(true)
    }
  }, [addSupplierErrorMessage, setError])
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
                ({
                  label,
                  type,
                  name,
                  className,
                  inputType,
                  address,
                  contacts,
                }) => {
                  if (
                    (supplier.isCompany && name === 'CPF') ||
                    (supplier.isCompany && name === 'name')
                  )
                    return <></>
                  if (
                    (!supplier.isCompany && name === 'CNPJ') ||
                    (!supplier.isCompany && name === 'socialReason')
                  )
                    return <></>
                  if (address) {
                    return (
                      <FormSection key="address" name="address">
                        {address.map(
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
                  Atualizar Fornecedor
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
              {addSupplierErrorMessage}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(EditSupplier)
