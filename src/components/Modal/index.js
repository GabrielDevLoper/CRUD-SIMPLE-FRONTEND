import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    textAlign: 'center'
  },
  
  openModalbtn: {
      border: 'none',
      backgroundColor: 'transparent',
  },

  absolute: {
    position: 'absolute',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    width: 100,
    height: 100,
    backgroundColor: '#4f3e87',
    '&:hover': {
      backgroundColor: '#7159c1',
    }
  },
}));

export default function TransitionsModal({ openModal, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button className={classes.openModalbtn} onClick={handleOpen}>
            {openModal}
        </button>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {children}
            <Tooltip title="Logout" aria-label="add" onClick={handleClose}>
                <Fab  color='primary' size='medium' className={classes.absolute}>
                    Fechar Modal
                </Fab>
          </Tooltip>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
