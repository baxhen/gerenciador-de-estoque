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

function Entrances({
  handleSubmit,
  formFields,
  dispatchGetEntrances,
  dispatchGetEntrancesByField,
  dispatchDeleteEntrance,
  dispatchGetSuppliers,
  entrances,
  suppliers,
  error,
  pristine,
  submitting,
}) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [selectedEntrance, setSelectedEntrance] = useState('')

  const onSubmit = ({ endDate, startDate, entranceId, supplier }) => {
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
    if (entranceId) {
      formFields.entranceId = entranceId
    } else if (supplier) {
      formFields.supplier = supplier
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
    dispatchGetEntrancesByField(formFields)
  }

  const handleClickOpen = (_id) => {
    setSelectedEntrance(_id)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDialogSubmit = () => {
    dispatchDeleteEntrance({ _id: selectedEntrance })
    setSelectedEntrance('')
    setOpen(false)
  }
  const renderDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Excluir Entrada</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você tem certeza de que quer excluir essa entrada?
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
    dispatchGetEntrances()
    if (suppliers.length === 0) {
      dispatchGetSuppliers()
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
              <Grid item key="supplier" style={{ marginBottom: '0.5em' }}>
                <Field
                  component={SelectField}
                  label="Fornecedor"
                  name="supplier"
                  type="select"
                  options={suppliers.map(({ _id, name, socialReason }) => {
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
                  history.push('dashboard-entrances-add')
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
            {entrances.map(({ entranceId, date, _id, totalPrice }) => (
              <div key={entranceId}>
                <ListItem>
                  <ListItemText
                    className={classes.listItem}
                    primary={`Data da entrada: ${new Date(
                      date,
                    ).toLocaleDateString('pt-BR')}`}
                    secondary={`Preço total da entrada: R$ ${totalPrice}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      style={{ marginRight: 10 }}
                      edge="end"
                      aria-label="detail"
                      onClick={() => {
                        history.push({
                          pathname: 'dashboard-entrances-detail',
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
                          pathname: 'dashboard-entrances-edit',
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

export default memo(Entrances)
