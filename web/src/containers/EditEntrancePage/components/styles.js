import { makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => ({
  content: {
    position: 'absolute',
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    width: window.innerWidth - 344,
    left: 344,
    [theme.breakpoints.down('xs')]: {
      left: 0,
      padding: 0,
      width: '100vw',
    },
  },
  input: { ...theme.palette.common.input, marginLeft: '10px' },
  supplierSelect: {
    width: '150px',
    marginLeft: '10px',
    marginRight: '40px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderRadius: 0,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.light,
      },
    },
  },
  productSelect: {
    width: '150px',
    marginLeft: '10px',
    marginRight: '40px',
    marginBottom: '10px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderRadius: 0,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.light,
      },
    },
  },
  button: {
    borderRadius: 50,
    height: 45,
    width: '328px',
    color: 'white',
    fontWeight: 400,
    fontSize: '1rem',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    marginTop: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  addProductButton: {
    borderRadius: 50,
    height: 45,
    width: '268px',
    color: 'white',
    fontWeight: 400,
    fontSize: '1rem',
    marginBottom: '10px',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    marginTop: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  formContainer: {
    width: '100%',
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '48px',
    marginRight: '20px',
    marginTop: '4px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))
