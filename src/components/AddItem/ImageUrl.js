import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, TextField } from '@material-ui/core';
import Placeholder from '../../images/placeholder-vertical.jpg';

class AddImageUrl extends Component {

  render() {
    return (
      <div >
        <div>
          <Card style={{ textAlign: 'center', marginTop: 10 }}>
              { this.props.image_url === '' ? ( <img src= { Placeholder } /> ) : ( 
                  <img className='addImage' src={ this.props.image_url }/>
                  ) }
          </Card>
        </div>
        <div className="image_Url" style = { { paddingTop: 15 } }>
          <TextField 
              htmlFor="image_Url"
              label='Image URL:'
              variant="outlined"
              onChange={ ( event ) => this.props.handleChangeFor( event, 'image_url' )}>
          </TextField>
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddImageUrl );