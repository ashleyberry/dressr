import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, 
IconButton,
Toolbar,
Typography } from '@material-ui/core';
import SimpleMenu from '../VeggieHamburgerBar/VeggieHamburgerBar';

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

class Navbar extends Component {
  render() {
    const {classes} = this.props;

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar>
          
            <SimpleMenu/>
          
          <Typography className={classes.flex} type="title" color="inherit">
            Material-UI Demo App
          </Typography>
          <div>
            <IconButton color="contrast" onClick={this.props.login}>
              <AccountCircleIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);


