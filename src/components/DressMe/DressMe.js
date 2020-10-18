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
    newTopsArray: [],
    newBottomsArray: [],
    randomTop: '',
    randomBottom: '',
  };

  componentDidMount = () => {
    this.sortTops();
    this.sortBottoms();
  }

  dressMe = () => {
    console.log( 'in dressMeeeeee!' )
    let randomTopMax = this.state.newTopsArray.length-1;
    let randomTop = this.randomNumber( 0, randomTopMax )
    let randomBottomMax = this.state.newBottomsArray.length-1;
    let randomBottom = this.randomNumber( 0, randomBottomMax )
    this.setState({
      ...this.state,
      randomTop: this.state.newTopsArray[ randomTop ],
      randomBottom: this.state.newBottomsArray[ randomBottom ]
    })
  }

  findBottom = () => {
    let randomBottomMax = this.state.newBottomsArray.length-1;
    let randomBottom = this.randomNumber( 0, randomBottomMax )
    this.setState({
      ...this.state,
      randomBottom: this.state.newBottomsArray[ randomBottom ]
    })
  }

  findTop = () => {
    let randomTopMax = this.state.newTopsArray.length-1;
    let randomTop = this.randomNumber( 0, randomTopMax )
    this.setState({
      ...this.state,
      randomTop: this.state.newTopsArray[ randomTop ]
    })
  }

  sortTops = () => {
    console.log( 'in sortTops' )
    { this.props.store.clothing.map(( item )=> {
        if ( item.kind === 'top' || item.kind === 'Top' ) {
          // add item to local state tops array.
          this.setState( previousState => ({
            newTopsArray: [...previousState.newTopsArray, item.image_url ]
        }));
           }
           }
        )}
          
      }

  sortBottoms = () => {
    console.log( 'in sortBottoms' )
    { this.props.store.clothing.map(( item )=> {
           if ( item.kind === 'bottom' || item.kind === 'Bottom' ) {
             // add item to local state bottoms array.
          this.setState( previousState => ({
            newBottomsArray: [...previousState.newBottomsArray, item.image_url ]
        }));
           }
          }
        )
      }
  }

  randomNumber = ( min, max ) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  render() {
    console.log( 'dressmeeeeee:', this.props.store )
    console.log( 'this.state.newTopsArray:', this.state.newTopsArray )
    console.log( 'this.state.newTopsArray.length:', this.state.newTopsArray.length-1 )
    console.log( 'this.state.randomTop:', this.state.randomTop )
    console.log( 'this.state.newBottomsArray:', this.state.newBottomsArray )
    console.log( 'this.state.newBottomsArray.length:', this.state.newBottomsArray.length-1 )
    console.log( 'this.state.randomBottom:', this.state.randomBottom )

        
    return (
      <div>
        <div className='dressMe'>
                <div className ='dressMeHeader'>
                <div className="dressMeBtn"
                      style={{ textAlign:'center' }}>
                      <Button 
                        onClick= { this.dressMe }
                        variant='outlined'
                        color='primary'>                  
                        <Typography 
                        variant='h5'>
                        Dress Me
                    </Typography>
                      </Button>
                    </div>
                </div>

                <div className='dressMeImages'>
                  { this.state.randomBottom === '' ? (<div></div>) : 
                    (<div className='dressMeTop'>
                      <Card style={{ marginTop: 10 }}>
                        <img src={ this.state.randomTop }
                        style={{ objectFit: 'cover' }}></img>
                      </Card>
                      <div className='getTopBtn'
                        style={{ textAlign:'center' }}>
                        <Button 
                          style={{ marginTop: 5 }}
                          onClick= { this.findTop }
                          variant='outlined'
                          color='primary'>New Top
                        </Button>
                      </div>
                    </div>
                    )}

                    { this.state.randomBottom === '' ? (<div></div>) : 
                    (<div className='dressMeBottom'>
                      <Card style={{ marginTop: 10 }}>
                        <img src={ this.state.randomBottom }
                        style={{ objectFit: 'cover' }}></img>
                      </Card>
                      <div className='getBottomBtn'
                        style={{ textAlign:'center' }}>
                          <Button
                            style={{ marginTop: 5 }} 
                            onClick= { this.findBottom }
                            variant='outlined'
                            color='primary'>New Bottom
                          </Button>
                      </div>
                    </div>
                    )}
                </div>
            </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( DressMe );
