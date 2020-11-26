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
import { history } from '../../../history'
import { SelectField } from 'components/ReduxForm/Select/SelectField'

const useStyles = styles

function TakeOff({
  handleSubmit,
  formFields,
  dispatchGetTakeOffs,
  dispatchGetTakeOffsByField,
  dispatchDeleteTakeOff,
  dispatchGetClients,
  takeOffs,
  clients,
  error,
  pristine,
  submitting,
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedTakeOff, setSelectedTakeOff] = useState('')

  const onSubmit = ({ endDate, startDate, takeOffId, client }) => {
    const formFields = {}
    var today = new Date()
    var myStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      0,
      0,
      0,
    )
    var myEnd = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1,
      0,
      0,
      0,
    )
    if (takeOffId) {
      formFields.takeOffId = takeOffId
    } else if (client) {
      formFields.client = client
    } else {
      formFields.startDate = startDate
        ? new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate(),
            0,
            0,
            0,
          )
        : myStart
      formFields.endDate = endDate
        ? new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate() + 1,
            0,
            0,
            0,
          )
        : myEnd
    }

    // console.log(formFields.startDate.toString(),formFields.endDate)
    dispatchGetTakeOffsByField(formFields)
  }

  const handleClickOpen = (_id) => {
    setSelectedTakeOff(_id)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDialogSubmit = () => {
    dispatchDeleteTakeOff({ _id: selectedTakeOff })
    setSelectedTakeOff('')
    setOpen(false)
  }
  const renderDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Excluir Saída</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza de que quer excluir essa saída?
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
    dispatchGetTakeOffs()
    if (clients.length === 0) {
      dispatchGetClients()
    }
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
              <Grid item key="client" style={{ marginBottom: '0.5em' }}>
                <Field
                  component={SelectField}
                  label="Cliente"
                  name="client"
                  type="select"
                  options={clients.map(({ _id, name, socialReason }) => {
                    return {
                      value: _id,
                      name: socialReason ? socialReason : name,
                    }
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
                  history.push('dashboard-take-offs-add')
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
            {takeOffs.map(({ takeOffId, date, _id, totalPrice }) => (
              <div key={takeOffId}>
                <ListItem>
                  <ListItemText
                    className={classes.listItem}
                    primary={`Data da saída: ${new Date(
                      date,
                    ).toLocaleDateString('pt-BR')}`}
                    secondary={`Preço total da saída: R$ ${totalPrice}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="detail"
                      onClick={() => {
                        history.push({
                          pathname: 'dashboard-take-offs-detail',
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
                          pathname: 'dashboard-take-offs-edit',
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

export default memo(TakeOff)
