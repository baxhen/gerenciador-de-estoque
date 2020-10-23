import React, { memo, useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import { styles } from './styles'
import { Link } from 'react-router-dom'

const useStyles = styles

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function Navigation({
  headerConfig,
  linksConfig,
  value,
  setValue,
  isAuthenticated,
}) {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)

  /***************************************** Config Objects **********************************************/
  const headerConditions = [
    {
      first: isAuthenticated,

      action: () => {
        return renderHeader('Quando o usuário esta autenticado')
      },
    },
    {
      first: !isAuthenticated,

      action: () => {
        return renderHeader('Quando o usuário não esta autenticado')
      },
    },
  ]
  /*******************************************************************************************************/

  const handleChange = (e, value) => {
    setValue(value)
  }

  const renderTabs = (tabs) => (
    <Tabs
      value={value >= tabs.length ? 0 : value}
      onChange={handleChange}
      className={classes.tabContainer}
      indicatorColor="primary"
    >
      {tabs.map(({ label, to, className }) => (
        <Tab
          key={label}
          className={classes[className]}
          label={label}
          component={Link}
          to={to}
        />
      ))}
    </Tabs>
  )
  const renderDrawer = (tabs) => (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>

        <List disablePadding>
          {tabs.map(({ label, to }, i) => (
            <ListItem
              divider
              button
              key={label}
              component={Link}
              to={to}
              onClick={() => {
                setOpenDrawer(false)
                setValue(i)
              }}
              selected={value === i}
              classes={{ selected: classes.drawerSelectedItem }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {label}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  const renderHeader = (condition) => {
    const [headerToRender] = headerConfig.filter(({ cond }) => {
      return condition === cond
    })

    const {
      logoTab: { label, to },
      tabs,
    } = headerToRender

    return (
      <>
        <ElevationScroll>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar disableGutters>
              <Tab
                label={label}
                component={Link}
                to={to}
                onClick={() => {
                  setValue(0)
                }}
              />

              {matches ? renderDrawer(tabs) : renderTabs(tabs)}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
      </>
    )
  }

  function renderLinks() {
    const [header] = headerConditions.filter(({ first, action }) => {
      if (first) return action()
      return null
    })

    return header.action()
  }

  useEffect(() => {
    const { pathname } = window.location

    linksConfig.forEach(
      ({ path, linkValue }) =>
        pathname === path && value !== linkValue && setValue(linkValue),
    )
  }, [value, setValue, linksConfig])

  return <div className="header">{renderLinks()}</div>
}

Navigation.propTypes = {}

export default memo(Navigation)
