import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import NavBar from '../NavBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#19181F',
        color: 'white',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    icon: {
        color: 'white',
        '&:hover':{
            backgroundColor: purple[500],
            
        }
    }

}));


export default function Drawers({ open, handleDrawerClose }) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton className={classes.icon} onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.icon}/> : <ChevronRightIcon className={classes.icon}/>}
                    </IconButton>
                </div>
                <Divider />
                {/**NavBar */}
                <NavBar />
                {/** END - NavBar */}
            </Drawer>
        </>
    );
}
