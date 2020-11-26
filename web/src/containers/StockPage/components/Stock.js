import React, { memo, useEffect, useState } from 'react'
import { styles } from './styles'
import { Field } from 'redux-form'
import {
  Grid,
  List,
  ListItemText,
  ListItem,
  Divider,
  IconButton,
  FormControl,
  FormHelperText,
} from '@material-ui/core'
import { Search, Add as AddIcon } from '@material-ui/icons'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

const useStyles = styles

function Stock({
  dispatchGetStock,
  stock,
  handleSubmit,
  formFields,
  submitting,
  pristine,
  error,
  categories,
  dispatchGetCategories,
}) {
  const classes = useStyles()
  const [filter, setFilter] = useState({ key: '', value: '' })
  const [filteredStock, setFilteredStock] = useState([])

  const onSubmit = (formFields) => {
    const [key] = Object.keys(formFields)
    setFilter({ key, value: formFields[key] })
  }

  useEffect(() => {
    if (filter.value === '') {
      setFilteredStock(stock)
    } else {
      const filteredValue = stock.filter((product) => {
        const regex = new RegExp(`.*${filter.value}.*`, 'i')
        return product[filter.key].match(regex)
      })
      setFilteredStock(filteredValue)
    }
    // eslint-disable-next-line
  }, [filter, stock])
  useEffect(() => {
    dispatchGetStock()
    dispatchGetCategories()
    // eslint-disable-next-line
  }, [])
  return (
    <main className={classes.content}>
      <Grid container direction="column">
        <Grid item>
          <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
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
                  type="select"
                  options={categories.map(({ _id, name }) => {
                    return { value: _id, name }
                  })}
                  className={classes.categorySelect}
                />
              </Grid>
              <IconButton
                aria-label="search"
                className={classes.iconButton}
                type="submit"
                disabled={pristine || submitting}
              >
                <Search />
              </IconButton>
            </Grid>
            <FormHelperText
              style={{
                textAlign: 'center',
                marginBottom: '9.5px',
                marginTop: '9.5px',
              }}
            >
              {error?.search}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <List>
            {filteredStock.map(({ name, quantity, productId }) => (
              <div key={name}>
                <ListItem>
                  <ListItemText
                    className={classes.listItem}
                    primary={`${name} `}
                    secondary={`ID do Produto: ${productId} - Quantidade em estoque: ${quantity}`}
                  />
                </ListItem>
                <Divider className={classes.divider} variant="inset" />
              </div>
            ))}
          </List>
        </Grid>
      </Grid>
    </main>
  )
}

export default memo(Stock)
