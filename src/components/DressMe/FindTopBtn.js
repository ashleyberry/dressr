import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// stying with material-ui
import { Button } from '@material-ui/core';

class FindTopBtn extends Component {

  render() {
    return (
        <div className='getTopBtn' style={{ textAlign:'center' }}>
            <Button 
                style={{ marginTop: 5 }}
                onClick= { this.props.findTop }
                variant='outlined'
                color='primary'>New Top
            </Button>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(FindTopBtn);
