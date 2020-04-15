import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from '../Main';
import Header from '../Header';
import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   

  },
}));

export default function PersistentDrawerLeft() {
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
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open} />
    </div>
  );
}
