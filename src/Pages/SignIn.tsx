import React from 'react';
import { Button, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';
import { Twitter, Search, PeopleOutline, MessageOutlined } from '@material-ui/icons';
import { ModalBlock } from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    }
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350%',
    height: '350%',
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: '32px',
    marginBottom: '45px',
    marginTop: '20px',
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
  loginSideField: {
    marginBottom: 18,
  },
}));

const SignIn = () => {
  const classes = useStylesSignIn();

  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };


  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
      <Twitter color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6"><Search className={classes.blueSideListInfoIcon}/>?????????????? ?? ??????, ?????? ?????? ??????????????????.</Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6"><PeopleOutline className={classes.blueSideListInfoIcon}/>?????????????? ?? ?????? ?????????????? ?? ????????.</Typography>
          </li>
          <li>
            <Typography variant="h6"><MessageOutlined className={classes.blueSideListInfoIcon}/>?????????????????????????????? ?? ??????????????.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <Twitter color="primary" className={classes.loginSideTwitterIcon} />
          <Typography variant="h4" className={classes.loginSideTitle}>??????????????, ?????? ???????????????????? ?? ???????? ?????????? ????????????</Typography>
          <Typography><b>?????????????????????????????? ?? ???????????????? ?????????? ????????????</b></Typography>
          <br />
          <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth onClick={handleClickOpenSignUp}>????????????????????????????????????</Button>
          <Button variant="outlined" color="primary" fullWidth onClick={handleClickOpenSignIn}>??????????</Button>
          <ModalBlock
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="?????????? ?? ??????????????">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="????????????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  ??????????
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
          <ModalBlock
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="???????????????? ?????????????? ????????????">
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="??????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="????????????"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  ??????????
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  );
}

export default SignIn;