import React from 'react';
import classNames from 'classnames';
import { Avatar, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { ChatBubbleOutline, RepeatOutlined, FavoriteBorderOutlined, ReplyOutlined } from '@material-ui/icons';

import { useHomeStyles } from '../../Pages/Home';

interface TweetProps {
  text: string,
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarURL: string;
  },
}

export const Tweet: React.FC<TweetProps> = ({ classes, user, text }): React.ReactElement => {
  return (
    <Paper className={classNames(classes.tweet,classes.tweetsHeader)} variant="outlined">
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <Avatar alt={`Аватарка пользователя ${user.fullname}`} src={user.avatarURL} className={classes.tweetAvatar}/>
      </Grid>
      <Grid item xs={11}>
        <Typography>
          <b>{user.fullname}</b>&nbsp;
          <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
          <span className={classes.tweetsUserName}>.</span>&nbsp;
          <span className={classes.tweetsUserName}>1ч</span>
        </Typography>
        <Typography variant="body1">
          {text}
        </Typography>
        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <ChatBubbleOutline style={{ fontSize: 20 }} color="primary"/>
            </IconButton>
            <span style={{ fontSize: 14 }}>1</span>
          </div>
          <div>
            <IconButton>
              <RepeatOutlined style={{ fontSize: 20 }} color="primary"/>
            </IconButton>
            <span style={{ fontSize: 14 }}></span>
          </div>
          <div>
            <IconButton>
              <FavoriteBorderOutlined style={{ fontSize: 20 }} color="primary"/>
            </IconButton>
            <span style={{ fontSize: 14 }}></span>
          </div>
          <div>
            <IconButton>
              <ReplyOutlined style={{ fontSize: 20 }} color="primary"/>
            </IconButton>
            <span style={{ fontSize: 14 }}></span>
          </div>
        </div>
      </Grid>
    </Grid>
  </Paper>
  )
}
