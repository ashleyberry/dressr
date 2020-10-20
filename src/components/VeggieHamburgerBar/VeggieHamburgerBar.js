import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


import { withStyles } from '@material-ui/core/styles';


export default function SimpleMenu() {
    const styles = theme => ({
        root: {
          marginTop: theme.spacing.unit *3,
          width: '100%'
        },
        flex: {
          flex: 1
        },
        menuButton: {
          marginLeft: -12,
          marginRight: 20
        }
      })

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem onClick={handleHomeClick}>Home</MenuItem>

        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
