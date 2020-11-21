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
  container: {
    width: '36rem',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '16px',
    margin: '3rem auto auto auto',
    [theme.breakpoints.down('xs')]: {
      width: '20rem',
    },
  },
  root: {
    minWidth: 275,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginBottom: '5rem',
    marginTop: '5rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chips: {
    marginBottom: '10px',
    marginTop: '10px',
    marginRight: '10px',
  },
}))
