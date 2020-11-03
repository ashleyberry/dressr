import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';

class DescriptionHeader extends Component {
  state = {
    color: this.props.store.recentClothing.color,
    brand: this.props.store.recentClothing.brand,
    type: this.props.store.recentClothing.type,
  };

  render() {
    return (
      <div className ='descriptionHeader'>
        <Typography 
            style={{ fontFamily: 'Quicksand', padding: 5 }}
            variant='h4'>
            { this.state.color } { this.state.brand } { this.state.type }
        </Typography>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DescriptionHeader );
