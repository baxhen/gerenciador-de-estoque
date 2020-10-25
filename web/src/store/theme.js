import { createMuiTheme } from '@material-ui/core/styles'

const primary = '#D5362E'
// const primaryLight = '#FF6B58'
// const primaryDark = '#9C0005'
const secondary = '#DEDEDE'
// const secondaryLight = '#FFFFFF'
// const secondaryDark = '#ACACAC'

export default createMuiTheme({
  palette: {
    // common: {
    //   blue: arcBlue,
    //   orange: arcOrange,
    // },
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
