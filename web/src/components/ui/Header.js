import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { linksConfig, headerConfig } from './configObjects';

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

  /***************************************** Config Objects **********************************************/
  const headerConditions = [
    {
      first: props.authenticated,

      action: () => {
        return renderHeader('Quando o usuário esta autenticado');
      },
    },
    {
      first: !props.authenticated,

      action: () => {
        return renderHeader('Quando o usuário não esta autenticado');
      },
    },
  ];
  /*******************************************************************************************************/

  const handleChange = (e, value) => {
    setValue(value);
  };

  const renderHeader = (condition) => {
    const [headerToRender] = headerConfig.filter(({ cond }) => {
      return condition === cond;
    });

    const {
      logoTab: { label, to },
      tabs,
    } = headerToRender;

    return (
      <>
        <ElevationScroll>
          <AppBar position="fixed">
            <Toolbar disableGutters>
              <Tab
                label={label}
                component={Link}
                to={to}
                onClick={() => {
                  setValue(0);
                }}
              />
              <Tabs
                value={value >= tabs.length ? 0 : value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor="primary"
              >
                {tabs.map(({ label, to, className }) => {
                  return (
                    <Tab
                      key={label}
                      className={classes[className]}
                      label={label}
                      component={Link}
                      to={to}
                    />
                  );
                })}
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
      </>
    );
  };

  function renderLinks() {
    const [header] = headerConditions.filter(({ first, action }) => {
      if (first) return action();
      return null;
    });

    return header.action();
  }

  useEffect(() => {
    const { pathname } = window.location;

    linksConfig.forEach(
      ({ path, linkValue }) =>
        pathname === path && value !== linkValue && setValue(linkValue)
    );
  }, [value]);

  return <div className="header">{renderLinks()}</div>;
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
