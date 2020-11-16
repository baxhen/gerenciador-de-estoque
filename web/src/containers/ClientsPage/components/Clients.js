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
// import { SelectField } from 'components/ReduxForm/Select/SelectField'
import { history } from '../../../history'

const useStyles = styles

function Clients({
  handleSubmit,
  formFields,
  dispatchGetClients,
  dispatchGetClientsByField,
  dispatchDeleteClient,
  clients,
  error,
  pristine,
  submitting,
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedSupplier, setSelectedSupplier] = useState('')
  const onSubmit = (formFields) => {
    const [key] = Object.keys(formFields)
    dispatchGetClientsByField({ name: key, value: formFields[key] })
  }
  const handleClickOpen = (_id) => {
    setSelectedSupplier(_id)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDialogSubmit = () => {
    dispatchDeleteClient({ _id: selectedSupplier })
    setSelectedSupplier('')
    setOpen(false)
  }
  const renderDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Excluir Cliente</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza de que quer excluir esse cliente?
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
    // dispatchGetCategories()
    dispatchGetClients()
    // eslint-disable-next-line
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
                  history.push('dashboard-clients-add')
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
            {clients.map(
              ({ name, socialReason, CPF, CNPJ, contacts, _id }) => (
                <div key={name || socialReason}>
                  <ListItem>
                    <ListItemText
                      className={classes.listItem}
                      primary={
                        name
                          ? `${name} - CPF: ${CPF}`
                          : `${socialReason} - CNPJ: ${CNPJ}`
                      }
                      secondary={contacts.email}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        style={{ marginRight: 10 }}
                        edge="end"
                        aria-label="detail"
                        onClick={() => {
                          history.push({
                            pathname: 'dashboard-clients-detail',
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
                            pathname: 'dashboard-clients-edit',
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
              ),
            )}
          </List>
        </Grid>
        {renderDialog()}
      </Grid>
    </main>
  )
}

export default memo(Clients)
