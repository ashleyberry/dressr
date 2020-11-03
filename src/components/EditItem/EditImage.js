import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card } from '@material-ui/core';
import Placeholder from '../../images/placeholder-vertical.jpg';

class EditImage extends Component {
    state = {
        image_url: this.props.store.recentClothing.image_url,
    };

  render() {
    return (
      <div>
        { this.state.image_url === '' ? ( 
          <Card>
            <img src= { Placeholder } />
          </Card>
         ) : ( 
          <Card style={{ textAlign: 'center', marginTop: 10 }}>
            <img className='addImage' src={ this.state.image_url }></img>
          </Card> ) }
      </div>
    );
  }
}

export default connect(mapStoreToProps)( EditImage );
