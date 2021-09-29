import React from 'react';
import { Button, IconButton, Typography } from '@material-ui/core'
import { BookmarkBorderOutlined, EmailOutlined, ListOutlined, NotificationsOutlined, PermIdentityOutlined, Search, Twitter } from '@material-ui/icons'
import { useHomeStyles } from '../../Pages/Home';

interface SideBarProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const SideBar: React.FC<SideBarProps> = ({ classes }): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.logo}>
        <Twitter color="primary" className={classes.logoIcon}/>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <Search className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Поиск</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <NotificationsOutlined className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Уведомления</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <EmailOutlined className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Сообщения</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <BookmarkBorderOutlined className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Закладки</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <ListOutlined className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Список</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <IconButton className={classes.iconButton}>
        <PermIdentityOutlined className={classes.sideMenuItemIcon}/>
        <Typography className={classes.sideMenuListItemLabel} variant="h6">Профиль</Typography>
      </IconButton>
    </li>
    <li className={classes.sideMenuItem}>
      <Button className={classes.sideMenuTweetButton} variant="contained" color="primary" fullWidth>Твитнуть</Button>
    </li>
  </ul>
  )
}
