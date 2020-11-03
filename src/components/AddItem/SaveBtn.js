import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';

class SaveBtn extends Component {

  render() {
    return (
      <div className='descriptionBtns' style={{textAlign:'center', padding: 5, display: 'inline-block'}}>
        <Button 
            onClick= { this.props.onSave }
            variant='outlined'
            color='primary'>Save
        </Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( SaveBtn );