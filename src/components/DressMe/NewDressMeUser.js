import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// stying with material-ui
import { Typography } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

class NewDressMeUser extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
        <div className='newDressMeUser'>
            <Typography variant='body1'>Looks like you don't have any items yet!</Typography>
            <Typography variant='body1'>Add some items and come back soon!</Typography>
            <LibraryAddIcon style={{ width: 50, height: 50 }} fontSize='large' onClick={ this.addItem }></LibraryAddIcon>
        </div>
    );
  }
}

export default connect(mapStoreToProps)( NewDressMeUser );
