import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';

class EditBtn extends Component {

  render() {
    return (
        <div className="editBtn" 
            style={{ textAlign:'center', marginTop: 150 }}>
            <Button  
                style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
                variant="outlined" 
                type="submit" 
                name="submit" 
                onClick={ () => this.props.onEditItem() }>Edit Item
            </Button>
        </div>
    );
  }
}

export default connect(mapStoreToProps)( EditBtn );
