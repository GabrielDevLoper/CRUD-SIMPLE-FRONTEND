import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mountains.svg';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
    backgroundColor: '#19181F'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover':{
      backgroundColor: '#7159c1',
      
    }
  },
  hide: {
    display: 'none',
  },
  links: {
    textDecoration: 'none',
    color: 'white' 

}

}));



export default function Header({ open, handleDrawerOpen, title }) {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide ) }
            
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.links}to="/main">
            <Typography variant="h5" noWrap>
              {title}
            </Typography>
          </Link>
          
        </Toolbar>
      </AppBar>

    </>
  );
}
