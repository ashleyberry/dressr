import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import material-ui styling
import { Typography } from '@material-ui/core';

class DeleteInfo extends Component {

  render() {
    return (
      <div>
          <hr/>
          <Typography style={{ marginTop: 20 }}variant='body1'>DONATE</Typography> 
          <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/Donate_Icon.png?name=Donate_Icon.png'></img>

          <Typography><a href="https://www.homelessshelterdirectory.org/" target="_blank"><b>Find nearby locations</b></a> to donate your gently-used clothing for those in need.</Typography>
          <Typography style={{ marginTop: 20 }} variant='body1'>RECYCLE</Typography>
          <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/RecycleClothing_Icon.png?name=RecycleClothing_Icon.png'></img>

          <Typography variant='body1'> Too worn out to donate?</Typography> 
          <Typography variant='body1'>Nearly 100% of textiles can be recycled!</Typography>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DeleteInfo );
