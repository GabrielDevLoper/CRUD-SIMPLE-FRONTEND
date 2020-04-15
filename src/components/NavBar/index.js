import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';


const ColorButton = withStyles((theme) => ({
    root: {
        '&:hover': {
            backgroundColor: '#7159c1',
        },
    },
}))(ListItem);

const useStyles = makeStyles((theme) => ({
    divider: {
        color: 'white',
        backgroundColor: 'white'
    },
    links: {
        textDecoration: 'none',
        color: 'white' 

    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <>
            <List>
                <Link className={classes.links} to="/main">
                    <ColorButton button >
                        <ListItemIcon>
                            <HomeIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ColorButton>
                </Link>
                <Link className={classes.links} to="/clients">
                    <ColorButton button >
                        <ListItemIcon>
                            <PeopleIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Clientes" />
                    </ColorButton>
                </Link>
                <Link className={classes.links} to="/">
                    <ColorButton button >
                        <ListItemIcon>
                            <PeopleIcon style={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Usuários" />
                    </ColorButton>
                </Link>

            </List>
            <Divider className={classes.divider} />



        </>
    );
}
