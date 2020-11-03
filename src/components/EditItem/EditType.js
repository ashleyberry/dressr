import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormControl, 
  InputLabel, 
  Select } from '@material-ui/core';

class EditType extends Component {

  render() {
    return (
      /* drop down with type names */
      <div className='editType'>
        <FormControl variant='outlined'>
          <InputLabel id="type-native-helper">Type</InputLabel>
            <Select
              labelId='type-label'
              id='type-native-helper'
              native
              label='Type'
              onChange={ ( event ) => this.props.handleChangeFor ( event, 'type' ) }
              inputProps={{
                name: 'type',
              }}>
              <option aria-label="None" value="" />
              {this.props.store.types.map( type => {
                return (
                  <option key={ type.id } 
                  value={ type.type }>
                  { type.type }
                  </option>
                )
              })}
              <option>other</option>
            </Select>
        </FormControl>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( EditType );