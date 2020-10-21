import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Item from '../CarouselSlide/CarouselSlide';
import Carousel from 'react-material-ui-carousel'

import './DressMe.css';

// stying with material-ui
import { 
  Button, 
  Card,
  Typography
} from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

class DressMe extends Component {

  state = {
    newTopsArray: [],
    newBottomsArray: [],
    randomTop: '',
    randomBottom: '',
    activeIndex: 0
  };

  componentDidMount = () => {
    this.sortTops();
    this.sortBottoms();
  }


  addItem = () => {
    this.props.history.push('/addItem')
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
    if ( this.state.newTopsArray.length === 0 ) {

    return (
      <div className='newDressMeUser'>
        <Typography variant='body1'>Looks like you don't have any items yet!</Typography>
        <Typography variant='body1'>Add some items and come back soon!</Typography>
        <LibraryAddIcon style={{ width: 50, height: 50 }} fontSize='large' onClick={ this.addItem }></LibraryAddIcon>
      </div>
    )} else 
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

                <div className='dressMeTop'>
                  { this.state.randomTop === '' ? (
                    <div>
                      <Carousel autoPlay={ false } >
                        { this.state.newTopsArray.map( (item, i) => 
                          <Item key={i} item={item} /> )}
                      </Carousel>
                    </div>) : (
                    <div className='randomTop'>
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
                </div>

                <div className='dressMeBottom'>
                    { this.state.randomBottom === '' ? (<div>
                      <Carousel autoPlay={ false } >
                        { this.state.newBottomsArray.map( (item, i) => 
                          <Item key={i} item={item} /> )}
                      </Carousel>
                    </div>) : 
                    (<div className='randomBottom'>
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
      </div>
    );
  }
}

export default connect( mapStoreToProps )( withRouter ( DressMe ));
