import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// stying with material-ui
import { Button } from '@material-ui/core';

class FindBottomBtn extends Component {

  render() {
    return (
        <div className='getBottomBtn'
            style={{ textAlign:'center' }}>
                <Button
                    style={{ marginTop: 5 }} 
                    onClick= { this.props.findBottom }
                    variant='outlined'
                    color='primary'>New Bottom
                </Button>
        </div>
    );
  }
}

export default connect(mapStoreToProps)( FindBottomBtn );
