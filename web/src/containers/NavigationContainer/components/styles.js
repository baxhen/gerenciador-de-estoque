import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '0.65em',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.1em',
    },
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
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
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
}));
