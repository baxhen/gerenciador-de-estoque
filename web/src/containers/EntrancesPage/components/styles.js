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
  input: {
    ...theme.palette.common.input,
    marginLeft: '10px',
    marginRight: '10px',
  },
  listItem: {
    color: theme.palette.primary.main,
    '& .MuiListItemText-secondary': {
      color: theme.palette.primary.main,
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '48px',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  startDate: {
    width: '164px',
    height: '1.1876em',
    marginRight: '10px',
    '& .MuiInputBase-input': { color: theme.palette.primary.main },
  },
  endDate: {
    width: '164px',
    marginRight: '30px',
    '& .MuiInputBase-input': { color: theme.palette.primary.main },
  },
}))
