import { makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: '10vh !important',
  },
  logoContainer: {
    marginLeft: '2.5rem',
    height: '10vh',
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  logo: {
    height: '10vh',
    marginBottom: 0,
    padding: 0,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  lastTab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
    marginRight: '25px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.secondary,
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerSelectedItem: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    height: '10vh',
  },
}))
