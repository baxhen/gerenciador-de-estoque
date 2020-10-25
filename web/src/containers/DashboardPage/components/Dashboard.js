import React, { memo } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useTheme } from '@material-ui/core/styles'
import { styles } from './styles'
import { Button, Grid } from '@material-ui/core'

import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

const useStyles = styles

function Dashboard({ value, setValue }) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Grid container direction="column">
        <Button
          component={Link}
          to="/dashboard"
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
          {[
            {
              text: 'Consultar Estoque',
              valueActive: 0,
              to: 'dashboard-stock',
            },
            {
              text: 'Consultar Entradas',
              valueActive: 1,
              to: 'dashboard-entrances',
            },
            {
              text: 'Consultar Saídas',
              valueActive: 2,
              to: 'dashboard-take-off',
            },
            {
              text: 'Consultar Fornecedores',
              valueActive: 3,
              to: 'dashboard-suppliers',
            },
            {
              text: 'Consultar Produtos',
              valueActive: 4,
              to: 'dashboard-products',
            },
          ].map(({ text, valueActive, to }) => (
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
              }}
            >
              <ListItemText primary={text} style={{ textAlign: 'center' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  )

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
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
        <div className={classes.columnOne}></div>
        <div className={classes.columnTwo}></div>
        <Hidden xsDown implementation="css">
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
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main> */}
    </div>
  )
}

export default memo(Dashboard)
