import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
    
  },
  flesax:{
      justifyContent: 'flex-end'
  }
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div className={classes.flesax}>
      
      <Tooltip title="Adicionar Cliente" aria-label="Adicionar Cliente">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      
    </div>
  );
}
