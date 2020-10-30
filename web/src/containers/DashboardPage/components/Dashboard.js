import React, { memo, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useTheme } from '@material-ui/core/styles'
import { styles } from './styles'
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { history } from '../../../history'

const useStyles = styles

function Dashboard({ value, setValue, menuItems }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Grid container direction="column">
        <Button
          component={Link}
          to="/dashboard-stock"
          disableRipple
          className={classes.logoContainer}
        >
          <img src={logo} alt="Logo" className={classes.logo} />
        </Button>
        <List>
          <ListItem key="Menu" justify="center">
            <ListItemText primary="Menu" className={classes.menuTitle} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="signout"
            key="Sair"
            justify="center"
            className={classes.signOutButton}
          >
            <ListItemText
              primary="Sair"
              className={classes.signOutButtonText}
            />
          </ListItem>
        </List>

        <Divider />
        <List>
          {menuItems.map(({ text, valueActive, to }) => (
            <ListItem
              button
              key={text}
              justify="center"
              className={
                classes[valueActive === value ? 'menuItemActive' : 'menuItem']
              }
              component={Link}
              to={to}
              onClick={() => {
                setValue(valueActive)
                matches && handleDrawerToggle()
              }}
            >
              <ListItemText primary={text} style={{ textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  )

  useEffect(() => {
    const historyListener = history.listen((location) => {
      const { pathname } = location
      menuItems.forEach(
        ({ to, valueActive }) =>
          pathname === '/' + to &&
          value !== valueActive &&
          setValue(valueActive),
      )

      return () => {
        historyListener()
      }
    })
  }, [menuItems, setValue, value])

  useEffect(() => {
    const { pathname } = window.location
    menuItems.forEach(
      ({ to, valueActive }) =>
        pathname === '/' + to && value !== valueActive && setValue(valueActive),
    )
  }, [menuItems, setValue, value])
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="primary" noWrap>
              ABC Livros e Brinquedos
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}></div>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            // anchor='right'
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <div className={classes.columnOne}></div>
          <div className={classes.columnTwo}></div>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default memo(Dashboard)
