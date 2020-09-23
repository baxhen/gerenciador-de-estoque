import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { headerConfig } from './configObjects';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const useStyles = makeStyles((theme) => ({
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
    position: 'absolute',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
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

export default function Footer({ value, setValue }) {
  const classes = useStyles();
  const [, tabs2] = headerConfig.map(({ tabs }) => tabs);
  const allTabs = [...tabs2];
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Hidden xsDown>
          {allTabs.map(({ label, to }, i) => (
            <Grid key={label + to} item className={classes.gridItem}>
              <Grid container direction="column">
                <Grid
                  item
                  className={classes.link}
                  onClick={() => setValue(i)}
                  component={Link}
                  to={to}
                >
                  {label}
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Hidden>
        <Grid
          container
          justify="flex-end"
          spacing={2}
          className={classes.socialContainer}
        >
          <Grid
            item
            component={'a'}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="facebook logo" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={'a'}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter logo" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={'a'}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram logo"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
