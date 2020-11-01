import { createMuiTheme } from '@material-ui/core/styles'

export const primary = '#D5362E'
const primaryLight = '#FF6B58'
const primaryDark = '#9C0005'
const secondary = '#DEDEDE'
// const secondaryLight = '#FFFFFF'
// const secondaryDark = '#ACACAC'

export default createMuiTheme({
  palette: {
    common: {
      input: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: primary,
            borderRadius: 0,
          },
          '&:hover fieldset': {
            borderColor: primaryLight,
          },
          color: primary,
        },
        width: '328px',
        marginBottom: '10px',
        // [theme.breakpoints.down('xs')]: {
        //   width: '100%',
        // },
      },
    },
    error: {
      main: primaryDark,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Roboto',
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1rem',
      color: primary,
    },
  },
  overrides: {
     MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "white"
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: primary,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: secondary,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${primary}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${primary}`,
        },
      },
    },
  },
})
