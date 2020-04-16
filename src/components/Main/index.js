import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header';
import Drawer from '../Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  root: {
    display: 'flex',
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    width: 70,
    height: 70,
    backgroundColor: '#4f3e87',
    '&:hover': {
      backgroundColor: '#7159c1',
    }
  },
  fab: {
    bottom: theme.spacing(2),
    right: theme.spacing(0),
  },
  icon: {
    fontSize: 40,
  }
}));


export default function Main({ children, title='CRUD-SIMPLE' }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} title={title}/>
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
        <div className={classes.drawerHeader} />
        
        {/**Conteudo da pagina */}
        {children}

        <Link to="/">
          <Tooltip title="Logout" aria-label="add">
            <Fab  color='primary' size='medium' className={classes.absolute}>
              <ExitToAppIcon className={classes.icon}/>
            </Fab>
          </Tooltip>
        </Link>
      </main>
    </div>

  );
}
