import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// stying with material-ui
import { Button } from '@material-ui/core';
class DressMeBtn extends Component {

  render() {
    return (
        <div className="dressMeBtn" style={{ textAlign:'center', marginBottom: 30 }}>
            <Button  
                style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
                variant="outlined" 
                type="submit" 
                name="submit" 
                onClick={ this.props.dressMe }>Dress Me
            </Button>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(DressMeBtn);
