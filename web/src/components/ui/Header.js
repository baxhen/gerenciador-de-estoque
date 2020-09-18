import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
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
}));

function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  function renderLinks() {
    if (props.authenticated) {
      return (
        <>
          <ElevationScroll>
            <AppBar position="fixed">
              <Toolbar disableGutters>
                <Tab label="Logo Aqui" component={Link} to="/" />
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tabContainer}
                  indicatorColor="primary"
                >
                  <Tab
                    className={classes.tab}
                    label="Feature"
                    component={Link}
                    to="/feature"
                  />
                  <Tab
                    className={classes.lastTab}
                    label="Sign Out"
                    component={Link}
                    to="/signout"
                  />
                </Tabs>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <div className={classes.toolbarMargin}></div>
        </>
      );
    } else {
      return (
        <>
          <ElevationScroll>
            <AppBar position="fixed">
              <Toolbar disableGutters>
                <Tab label="Logo Aqui" component={Link} to="/" />

                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tabContainer}
                  indicatorColor="primary"
                >
                  <Tab
                    className={classes.tab}
                    label="Sign Up"
                    component={Link}
                    to="/signup"
                  />
                  <Tab
                    className={classes.lastTab}
                    label="Sign In"
                    component={Link}
                    to="/signin"
                  />
                </Tabs>
                {/* <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link> */}
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <div className={classes.toolbarMargin}></div>
        </>
      );
    }
  }

  useEffect(() => {
    if (
      (window.location.pathname === '/signup' && value !== 0) ||
      (window.location.pathname === '/feature' && value !== 0)
    ) {
      setValue(0);
    } else if (
      (window.location.pathname === '/signin' && value !== 1) ||
      (window.location.pathname === '/signout' && value !== 1)
    ) {
      setValue(1);
    }
  }, []);

  return <div className="header">{renderLinks()}</div>;
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
