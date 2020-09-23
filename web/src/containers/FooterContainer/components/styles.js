import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    height: '17.5vh',
    zIndex: 1302,
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    position: 'absolute',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '3em',
    width: '3em',
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '2.6rem',
    width: 'auto',
    right: '1em',
  },
}));
