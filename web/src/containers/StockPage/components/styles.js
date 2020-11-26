import { makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => ({
  content: {
    position: 'absolute',
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    left: 344,
    [theme.breakpoints.down('xs')]: {
      left: 0,
      padding: 0,
      width: '100vw',
    },
  },
  button: {
    height: '48px',
    width: '156px',
    borderRadius: '50px',
  },
  input: { ...theme.palette.common.input, marginLeft: '10px' },
  categorySelect: {
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
  lastInput: {
    ...theme.palette.common.input,
    marginLeft: '10px',
    marginRight: '50px',
  },
  listItem: {
    color: theme.palette.primary.main,
    '& .MuiListItemText-secondary': {
      color: theme.palette.primary.main,
    },
    width: '850px',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '48px',
    marginLeft: '20px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))
