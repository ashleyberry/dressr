import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';

class DeleteBtn extends Component {

  render() {
    return (
      <div className='deleteBtn' style={{ marginTop: 10 }}>
            <Button 
                onClick= { this.props.onDeleteClick }
                variant='contained'
                color='secondary'>
                Delete Item
            </Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DeleteBtn );