import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';

class CancelBtn extends Component {

  render() {
    return (
      <div className='descriptionBtns' style={{textAlign:'center', padding: 5, display: 'inline-block'}}>
        <Button 
            onClick={ this.props.onCancel }
            variant='outlined'
            color='default'>
            Cancel
        </Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( CancelBtn );