import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormHelperText, 
    TextField } from '@material-ui/core';

class AddDescription extends Component {

  render() {
    return (
      <div className='descriptionInput' style = { { paddingTop: 15 } }>
            <TextField 
                onChange={ ( event ) => this.props.handleChangeFor ( event, 'description' ) } 
                type='text' 
                label='Item Description'
                variant='outlined'
                multiline
                style = { { width: 300 } }
                rows={4}
                rowsMax={4}
                >
            </TextField>
            <FormHelperText>Add Care / Washing Instructions or a Note</FormHelperText>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddDescription );