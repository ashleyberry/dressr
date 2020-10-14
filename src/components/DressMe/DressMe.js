import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './DressMe.css';

// stying with material-ui
import { 
  Button, 
  Card,
  Typography
} from '@material-ui/core';

class DressMe extends Component {

  state = {
    top_image: 'https://i.pinimg.com/564x/90/3a/3e/903a3ec0b277101716f9c87fbedc3667.jpg',
    bottom_image: 'https://storage.bhs.cloud.ovh.net/v1/AUTH_9f134bb533c64667ba7cd96ffdeaa2e7/aow-static/previews/full/preview-flare-skirt-499399-front-f.jpg',
  };

  findTop = () => {
    console.log( 'in findTop' )
  }

  findBottom = () => {
    console.log( 'in findBottom' )
  }

  render() {
    return (
      <div>
        <div className='dressMe'>
                <div className ='dressMeHeader'>
                  <Typography 
                      variant='h4'>
                      Dress Me
                  </Typography>
                </div>
                <br/>
                <div className='dressMeImages'>
                    <Card>
                      <img src={ this.state.top_image }></img>
                    </Card>
                    <div className='getTopBtn'
                    style={{textAlign:'center'}}>
                      <Button 
                        onClick= { this.findTop }
                        variant='outlined'
                        color='primary'>Find Top
                      </Button>
                    </div>
                    
                    <Card>
                      <img src={ this.state.bottom_image }></img>
                    </Card>
                    <div className='getBottomBtn'
                      style={{textAlign:'center'}}>
                        <Button 
                          onClick= { this.findBottom }
                          variant='outlined'
                          color='primary'>Find Bottom
                        </Button>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DressMe );
