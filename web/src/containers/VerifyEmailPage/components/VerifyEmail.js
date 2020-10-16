import React, { useState, memo, useEffect } from 'react';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { useParams } from 'react-router-dom';
import { CircularProgress, useMediaQuery } from '@material-ui/core';

function VerifyEmail(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { token, email } = useParams();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const { 
    verifyEmailMessage,  
    dispatchVerifyEmail,
    dispatchVerifyEmailDefault,
    history,
  } = props;

  const [open, setOpen] = useState(false);


  
  
  const onDialogClose = () => {
    setOpen(!open);
    history.push('/login');
  };
  
  useEffect(()=>{
    dispatchVerifyEmailDefault({ token, email })
    setOpen(!open);
    const handler = setTimeout(()=>{
      dispatchVerifyEmail();
    },1000)

    return ()=> {
      clearTimeout(handler)
    }
    // eslint-disable-next-line
  },[])
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.background}
    >
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              Verificação de email
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.blue,
                textAlign: 'center',
                marginBottom: '2em',
              }}
            >
              Estamos Verificando a sua conta
            </Typography>
          </Grid>     
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={onDialogClose}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '10em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '10em',
          },
        }}
      >
        <DialogContent>
          {verifyEmailMessage ? (
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom>
                  Redefinição de Senha
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">{verifyEmailMessage}</Typography>
              </Grid>
            </Grid>
          ) : (
            <CircularProgress />
          )}
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default memo(VerifyEmail);
