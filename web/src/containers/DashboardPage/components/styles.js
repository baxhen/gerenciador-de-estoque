import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 288

export const styles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: drawerWidth + 56,
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoContainer: {
    marginTop: '2.2rem',
  },
  menuTitle: {
    textAlign: 'center',
    '& .MuiTypography-body1': {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
  signOutButtonText: {
    '& .MuiTypography-body1': {
      color: theme.palette.primary.main,
      fontSize: 14,
    },
  },
  signOutButton: {
    textAlign: 'center',
    paddingTop: 0,
  },
  menuItem: {
    color: theme.palette.primary.main,
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    alignSelf: 'center',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.light,
    },
  },
  menuItemActive: {
    color: 'white',
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  columnOne: {
    position: 'fixed',
    top: 0,
    left: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
    width: 28,
    height: '100%',
  },
  columnTwo: {
    position: 'fixed',
    top: 0,
    left: drawerWidth,
    backgroundColor: theme.palette.primary.main,
    width: 56,
    height: '100%',
    opacity: 0.9,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}))
