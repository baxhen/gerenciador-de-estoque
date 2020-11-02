import React, { memo, useState } from 'react'
import { Field } from 'redux-form'
import { styles } from './styles'
import ButtonIcon from 'components/Common/ButtonIcon/ButtonIcon'
import { ArrowBack, Add as AddIcon } from '@material-ui/icons'
import {
  Grid,
  FormControl,
  Button,
  FormHelperText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@material-ui/core'
import { history } from '../../../history'
import { useEffect } from 'react'
import { generateProductId } from '../meta/generateProductId'

const useStyles = styles

function AddProduct({
  handleSubmit,
  formFields,
  pristine,
  submitting,
  categories,
  dispatchAddProduct,
  addProductErrorMessage,
  initialize,
  dispatchAddCategory,
}) {
  const classes = useStyles()
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState('')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleDialogSubmit = () => {
    dispatchAddCategory({ name: category })
    setOpen(false)
  }
  const onSubmit = (formValues) => {
    dispatchAddProduct(formValues)
  }
  const renderDialog = () => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Adicionar Nova Categoria</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Adicione o nome da nova categoria no campo de texto abaixo
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nova Categoria"
          value={category}
          onChange={handleCategoryChange}
          type="text"
          variant="outlined"
          className={classes.input}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDialogSubmit} color="primary">
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  )
  useEffect(() => {
    initialize({ productId: generateProductId() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (addProductErrorMessage) {
      setError(true)
    }
  }, [addProductErrorMessage, setError])
  return (
    <main className={classes.content}>
      <ButtonIcon
        onClick={() => {
          history.push('dashboard-products')
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
                if (name === 'category') {
                  return (
                    <Grid item key={name} style={{ marginBottom: '0.5em' }}>
                      <Field
                        component={inputType}
                        label={label}
                        options={categories.map(({ _id, name }) => {
                          return { value: _id, name }
                        })}
                        name={name}
                        type={type}
                        className={classes[className]}
                      />
                      <IconButton
                        aria-label="add"
                        onClick={handleClickOpen}
                        className={classes.iconButton}
                      >
                        <AddIcon />
                      </IconButton>
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
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  className={classes.button}
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Cadastrar Produto
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
              {addProductErrorMessage}
            </FormHelperText>
          </FormControl>
        </Grid>
        {renderDialog()}
      </Grid>
    </main>
  )
}

export default memo(AddProduct)
