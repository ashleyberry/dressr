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
    randomTop: 'https://ae01.alicdn.com/kf/H9e90586f2fcb42968f4a6bf36ce8daa34/ArtSu-Mesh-Top-Transparent-V-neck-T-shirts-for-Women-Puff-Sleeve-Black-White-Tshirt-Sexy.jpg_q50.jpg',
    randomBottom: '',
    tops: [ 
      'https://i.pinimg.com/564x/90/3a/3e/903a3ec0b277101716f9c87fbedc3667.jpg', 
      'https://ae01.alicdn.com/kf/H9e90586f2fcb42968f4a6bf36ce8daa34/ArtSu-Mesh-Top-Transparent-V-neck-T-shirts-for-Women-Puff-Sleeve-Black-White-Tshirt-Sexy.jpg_q50.jpg',
      'https://img.emmacloth.com/images/emmacloth.com/201611/8b/14780478354888563278.jpg',
      'https://cdn-images.farfetch-contents.com/colville-zip-back-vest_14483712_21567318_1000.jpg?c=2', 
    ],
    bottoms: [
      'https://storage.bhs.cloud.ovh.net/v1/AUTH_9f134bb533c64667ba7cd96ffdeaa2e7/aow-static/previews/full/preview-flare-skirt-499399-front-f.jpg', 
      'https://www.prada.com/content/dam/pradanux_products/2/22H/22H823/1WQ8F0002/22H823_1WQ8_F0002_S_202_SLF.png/_jcr_content/renditions/cq5dam.web.white.800.1000.webp',
      'https://d1nr5wevwcuzuv.cloudfront.net/product_photos/68222484/file_d74ddb7f42_400w.png',
      'http://picture-cdn.wheretoget.it/2m3gr4-l-610x610-jeans-vintage+levis+jeans-levi+516+jeans-90s+levis.jpg',
      'http://picture-cdn.wheretoget.it/da3wt5-i.jpg',
      'https://www.jcrew.com/s7-img-facade/AQ485_WQ8629_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850',
    ]
  };

  componentDidMount = () => {
    this.findTop();
    this.findBottom();
  }

  findBottom = () => {
    let randomBottomMax = this.state.bottoms.length-1;
    let randomBottom = this.randomNumber( 0, randomBottomMax )
    console.log( 'in FIIIIINDBOTTOM this.state.bottoms.length-1:', randomBottom )
    console.log(`randomly Generated Bottom`, this.state.bottoms[ randomBottom ])
    this.setState({
      ...this.state,
      randomBottom: this.state.bottoms[ randomBottom ]
    })
  }

  findTop = () => {
    let randomTopMax = this.state.tops.length-1;
    let randomTop = this.randomNumber( 0, randomTopMax )
    console.log( 'in FIIIIINDTOP this.state.tops.length-1:', randomTop )
    console.log(`randomly Generated Top`, this.state.tops[ randomTop ])
    this.setState({
      ...this.state,
      randomTop: this.state.tops[ randomTop ]
    })
    /* 
      // find all tops in store.clothing
      if (this.props.store.clothing.kind === 'top') {
        // make a new array of tops and store in state
        this.setState({
          tops: [
            ...this.state.tops,
            ...topsArray
          ]
        })
      }
    */
  }

  randomNumber = ( min, max ) => {
    console.log( 'in randomNumber' );
    return Math.floor(Math.random() * (1 + max - min) + min);
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
                      <img src={ this.state.randomTop }></img>
                    </Card>
                    <div className='getTopBtn'
                    style={{ textAlign:'center' }}>
                      <Button 
                        onClick= { this.findTop }
                        variant='outlined'
                        color='primary'>Find Top
                      </Button>
                    </div>
                    
                    <Card>
                      <img src={ this.state.randomBottom }></img>
                    </Card>
                    <div className='getBottomBtn'
                      style={{ textAlign:'center' }}>
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

export default connect( mapStoreToProps )( DressMe );
