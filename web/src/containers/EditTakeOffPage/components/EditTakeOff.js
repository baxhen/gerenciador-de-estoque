import React, { memo, useState, useEffect } from 'react'
import { Field, FieldArray } from 'redux-form'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack, Clear } from '@material-ui/icons'
import {
  Grid,
  FormControl,
  Button,
  FormHelperText,
  IconButton,
} from '@material-ui/core'
import { history } from '../../../history'
import { SelectField } from 'components/ReduxForm/Select/SelectField'
import { InputTextField } from 'components/ReduxForm/TextInput/InputTextField'

const useStyles = styles

function EditTakeOff({
  handleSubmit,
  formFields,
  pristine,
  submitting,
  clients,
  products,
  takeOff,
  dispatchEditTakeOff,
  dispatchGetProducts,
  dispatchGetClients,
  addTakeOffErrorMessage,
  initialize,
}) {
  const classes = useStyles()
  const [error, setError] = useState(false)

  const onSubmit = (formValues) => {
    dispatchEditTakeOff(formValues)
  }
  const renderProducts = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <>
        <Button
          variant="contained"
          className={classes.addProductButton}
          onClick={() => fields.push({})}
        >
          Adicionar Produto
        </Button>
        {fields.map((product, index) => (
          <Grid container direction="column" key={index}>
            <Grid item>
              <Field
                name={`${product}.product`}
                type="select"
                component={SelectField}
                options={products.map(({ _id, name }) => {
                  return { value: _id, name }
                })}
                label="Produto"
                className={classes.productSelect}
              />
              <IconButton
                aria-label="clear"
                onClick={() => fields.remove(index)}
                className={classes.iconButton}
              >
                <Clear />
              </IconButton>
            </Grid>
            <Grid item>
              <Field
                name={`${product}.unitPrice`}
                type="number"
                component={InputTextField}
                label="Preço Unitário"
                className={classes.input}
                minValue={0}
              />
            </Grid>
            <Grid item>
              <Field
                name={`${product}.quantity`}
                type="number"
                component={InputTextField}
                label="Quantidade"
                className={classes.input}
                minValue={0}
              />
            </Grid>
          </Grid>
        ))}
      </>
    )
  }
  useEffect(() => {
    if (clients.length === 0) {
      dispatchGetClients()
    }
    if (products.length === 0) {
      dispatchGetProducts()
    }

    initialize(takeOff)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (addTakeOffErrorMessage) {
      setError(true)
    }
  }, [addTakeOffErrorMessage, setError])
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-take-offs')
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
              {formFields.map(({ label, type, name, className, inputType }) => {
                if (name === 'client') {
                  return (
                    <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                      <Field
                        component={inputType}
                        label={label}
                        options={clients.map(({ _id, name, socialReason }) => {
                          return {
                            value: _id,
                            name: socialReason ? socialReason : name,
                          }
                        })}
                        name={name}
                        type={type}
                        className={classes[className]}
                      />
                    </Grid>
                  )
                } else {
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
                }
              })}
              <FieldArray name="products" component={renderProducts} />
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  className={classes.button}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Editar Saída
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
              {addTakeOffErrorMessage}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(EditTakeOff)
