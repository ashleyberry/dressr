import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField } from '@material-ui/core';

class AddBrand extends Component {

  render() {
    return (
      <div className="brand" style = { { paddingTop: 15 } }>
        <TextField 
            htmlFor="brand"
            label="Brand"
            variant="outlined"
            onChange={ ( event ) => this.props.handleChangeFor( event, 'brand' )}>
        </TextField>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddBrand );