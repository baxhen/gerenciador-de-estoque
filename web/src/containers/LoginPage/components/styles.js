import { withStyles } from '@material-ui/styles';

const useStyles = withStyles(
  (theme) => ({
    background: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '70vh',
      [theme.breakpoints.down('xs')]: {
        height: '38em',
      },
    },
    loginButton: {
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: '1rem',
      backgroundColor: theme.palette.common.blue,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
      marginTop: '2em',
    },
    title: {
      lineHeight: 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: 50,
      },
    },
    forgotPassword: {
      '&:hover': {
        textDecoration: 'none',
        color: theme.palette.primary.light,
      },
    },
    linkContainer: {
      color: 'primary',
    },
  }),
  { withTheme: true }
);

export default useStyles;
