import React, { memo, useEffect } from 'react'
import { styles } from './styles'
import { Grid, FormControl, FormHelperText } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { Field } from 'redux-form'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

const useStyles = styles

function Products({
  handleSubmit,
  formFields,
  dispatchGetCategories,
  categories,
}) {
  // const [error, setError] = useState(false)
  const classes = useStyles()
  const onSubmit = () => {
    // console.log('onSubmit')
  }
  useEffect(() => {
    dispatchGetCategories()
    // es-lint-disable-next-line
  }, [])
  return (
    <main className={classes.content}>
      <Grid container direction="column">
        <Grid item>
          <FormControl
            // error={this.state.error}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid item container>
              {formFields.map(({ label, type, name, className, fieldType }) => (
                <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                  <Field
                    component={fieldType}
                    label={label}
                    name={name}
                    type={type}
                    className={classes[className]}
                  />
                </Grid>
              ))}
              <Grid item key={'category'} style={{ marginBottom: '0.5em' }}>
                <Field
                  component={SelectField}
                  label="Categoria"
                  name="category"
                  options={categories.map(({ _id, name }) => {
                    return { value: _id, name }
                  })}
                  className={classes.categorySelect}
                />
              </Grid>
              <ButtonIcon Icon={Search} submit>
                Pesquisar
              </ButtonIcon>
            </Grid>
            <FormHelperText
              style={{
                textAlign: 'center',
                marginBottom: '9.5px',
                marginTop: '9.5px',
              }}
            ></FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>List</Grid>
      </Grid>
    </main>
  )
}

export default memo(Products)
