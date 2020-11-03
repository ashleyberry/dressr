import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { InputLabel,
    Typography
  } from '@material-ui/core';

class DescriptionMaterial extends Component {
    state = {
        material: this.props.store.recentClothing.material,
    };

  render() {
    return (
      <div className='materialDisplay' style={{textAlign: 'center'}}>
        <InputLabel style={{display : 'inline-block'}} htmlFor="material">
            Material: </InputLabel> <Typography variant='body1' style={{display : 'inline-block'}}>{ this.state.material }</Typography>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DescriptionMaterial );
