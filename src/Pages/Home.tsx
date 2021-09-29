import React from 'react';
import { Container, createStyles, Grid, InputBase, makeStyles, Paper, Theme, Typography, withStyles } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

import { Tweet } from '../components/Tweet';
import { SideBar } from '../components/SideBar';
import theme from '../theme';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  iconButton: {
    borderRadius: 30,
    padding: '10px 25px 10px 5px',
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 10,
    '&:hover': {
      '& button': {
        transition: 'background-color .2s ease-in-out',
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      }
    }
  },
  sideMenuListItemLabel: {
    color: 'black',
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 10,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  sideMenuItemIcon: {
    fontSize: 28,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: '10px 15px',

    '& h6': {
      fontWeight: 800,
    }
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    }
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -14,
    justifyContent: 'space-between',
    width: '90%',
  },
  tweetsUserName: {
    color: grey[500],
  }
}));

const SearchTextField = withStyles(() => createStyles({
  input: {
    borderRadius: 30,
    backgroundColor: '#E6ECF0',
    height: 45,
    padding: 0,
  }
}))(InputBase)

const text = 'Идейные соображения высшего порядка, а также социально-экономическое развитие требует анализа соответствующих условий активизации. Разнообразный и богатый опыт начало повседневной работы по формированию позиции играет важную роль в формировании новых принципов формирования материально-технической и кадровой базы';

const user = {
  fullname: 'Артем Именин',
  username: 'hobotslona',
  avatarURL: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
}

export const Home = () => {
  const classes = useHomeStyles(theme);

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideBar classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
            <Tweet classes={classes} user={user} text={text}/>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            fullWidth
            placeholder="Поиск по Twitter"
          />
        </Grid>
      </Grid>
    </Container>
  )
}
