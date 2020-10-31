import React, { memo, useEffect, useState } from 'react'
import { styles } from './styles'
import {
  Grid,
  FormControl,
  FormHelperText,
  List,
  ListItemAvatar,
  Button,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ListItem,
  Divider,
} from '@material-ui/core'
import {
  Search,
  Delete as DeleteIcon,
  FindInPage as FindInPageIcon,
  Create as CreateIcon,
} from '@material-ui/icons'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { Field } from 'redux-form'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

const useStyles = styles

function Products({
  handleSubmit,
  formFields,
  dispatchGetCategories,
  dispatchGetProducts,
  categories,
  products,
  error,
}) {
  const classes = useStyles()
  const onSubmit = (formFields) => {
    console.log(formFields)
  }
  useEffect(() => {
    dispatchGetCategories()
    dispatchGetProducts()
    // es-lint-disable-next-line
  }, [dispatchGetCategories, dispatchGetProducts])
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
                  type="text"
                  options={categories.map(({ _id, name }) => {
                    return { value: _id, name }
                  })}
                  className={classes.categorySelect}
                />
              </Grid>
              <ButtonIcon Icon={Search} type="submit">
                Pesquisar
              </ButtonIcon>
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
            {products.map(({ name, description }) => (
              <div key={name}>
                <ListItem>
                  <ListItemText
                    className={classes.listItem}
                    primary={name}
                    secondary={description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="delete"
                    >
                      <FindInPageIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="delete"
                    >
                      <CreateIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="delete"
                    >
                      <DeleteIcon fontSize="large" color="primary" />
                    </IconButton>
                  </ListItemSecondaryAction>
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

export default memo(Products)
