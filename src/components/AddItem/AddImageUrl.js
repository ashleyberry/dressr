import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, TextField } from '@material-ui/core';

class AddImageUrl extends Component {

  render() {
    return (
      <div className="image_Url" style = { { paddingTop: 15 } }>
        <TextField 
            htmlFor="image_Url"
            label='Image URL:'
            variant="outlined"
            onChange={ ( event ) => this.props.handleChangeFor( event, 'image_url' )}>
        </TextField>
        <div>
            { this.props.image_url === '' ? ( null ) : ( 
                <Card style={{ textAlign: 'center', marginTop: 10 }}>
                <img className='addImage' src={ this.props.image_url }></img>
                </Card> ) }
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddImageUrl );
