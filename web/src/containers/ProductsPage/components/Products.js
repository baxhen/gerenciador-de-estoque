import React, { memo, useEffect, useState } from 'react'
import { styles } from './styles'
import {
  Grid,
  FormControl,
  FormHelperText,
  List,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  ListItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core'
import {
  Search,
  Delete as DeleteIcon,
  FindInPage as FindInPageIcon,
  Create as CreateIcon,
  Add as AddIcon,
} from '@material-ui/icons'
import { Field } from 'redux-form'
import { SelectField } from 'components/ReduxForm/Select/SelectField'
import { history } from '../../../history'

const useStyles = styles

function Products({
  handleSubmit,
  formFields,
  dispatchGetCategories,
  dispatchGetProducts,
  dispatchGetProductsByField,
  dispatchDeleteProduct,
  categories,
  products,
  error,
  pristine,
  submitting,
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState('')
  const onSubmit = (formFields) => {
    const [key] = Object.keys(formFields)
    dispatchGetProductsByField({ name: key, value: formFields[key] })
  }
  const handleClickOpen = (_id) => {
    setSelectedProduct(_id)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDialogSubmit = () => {
    dispatchDeleteProduct({ _id: selectedProduct })
    setSelectedProduct('')
    setOpen(false)
  }
  const renderDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Excluir Produto</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza de que quer excluir esse produto?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDialogSubmit} color="primary">
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  )
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
              <IconButton
                aria-label="add"
                onClick={() => {
                  history.push('dashboard-products-add')
                }}
                className={classes.iconButton}
              >
                <AddIcon />
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
            {products.map(({ name, description, _id }) => (
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
                      aria-label="detail"
                      onClick={() => {
                        history.push({
                          pathname: 'dashboard-products-detail',
                          state: { _id },
                        })
                      }}
                    >
                      <FindInPageIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="edit"
                      onClick={() => {
                        history.push({
                          pathname: 'dashboard-products-edit',
                          state: { _id },
                        })
                      }}
                    >
                      <CreateIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleClickOpen(_id)}
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
        {renderDialog()}
      </Grid>
    </main>
  )
}

export default memo(Products)
