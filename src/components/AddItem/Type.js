import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormControl, 
InputLabel, 
Select, 
TextField } from '@material-ui/core';

class AddType extends Component {

  render() {
    return (
      <div className="type" style = { { marginTop: 10 } }> 
        <FormControl variant="outlined">
        <InputLabel id="type-label">Type</InputLabel>
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
            { this.props.store.types.map( type => {
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
        {/* Show hidden field if selected type is "other" */}
        <div className="hiddenOther"
            style = { { paddingTop: 10 } }>
            { this.props.isOther === false ? (
                null ) : ( 
                <TextField className="otherType"
                    id="outlined-basic" 
                    label="Enter type:" 
                    variant="outlined" 
                    onChange={ ( event ) => this.props.handleChangeFor ( event, 'type' ) }>
                </TextField>
            )}
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddType );