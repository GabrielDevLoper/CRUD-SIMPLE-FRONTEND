import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';


const ColorButton = withStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: '#7159c1',
      },
      
    },
  }))(ListItem);

export default function NavBar() {
    return (
        <>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ColorButton button key={text}>
                        <ListItemIcon style={{color: 'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ColorButton>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ColorButton button key={text}>
                        <ListItemIcon style={{color: 'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ColorButton>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ColorButton button key={text}>
                        <ListItemIcon style={{color: 'white'}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ColorButton>
                ))}
            </List>
        </>
    );
}
