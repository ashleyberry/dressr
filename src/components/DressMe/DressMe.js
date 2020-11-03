import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Item from './CarouselSlide';
import Carousel from 'react-material-ui-carousel';
import Nav from '../Nav/Nav';
import DressMeBtn from './DressMeBtn';
import FindBottomBtn from './FindBottomBtn';
import FindTopBtn from './FindTopBtn';
import NewDressMeUser from './NewDressMeUser';
import './DressMe.css';

// stying with material-ui
import { 
  Button, 
  Card
} from '@material-ui/core';

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

  // randomly selects a top and bottom from the user's wardrobe
  dressMe = () => {
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

  // randomly selects a new bottom from the user's wardrobe
  findBottom = () => {
    let randomBottomMax = this.state.newBottomsArray.length-1;
    let randomBottom = this.randomNumber( 0, randomBottomMax )
    this.setState({
      ...this.state,
      randomBottom: this.state.newBottomsArray[ randomBottom ]
    })
  }

  // randomly selects a new top from the user's wardrobe
  findTop = () => {
    let randomTopMax = this.state.newTopsArray.length-1;
    let randomTop = this.randomNumber( 0, randomTopMax )
    this.setState({
      ...this.state,
      randomTop: this.state.newTopsArray[ randomTop ]
    })
  }

  // creates new array with all tops from user's clothing database
  sortTops = () => {
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

  // creates new array with all tops from user's clothing database
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

  // randomizing algorithm
  randomNumber = ( min, max ) => {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  render() {
    if ( this.state.newTopsArray.length === 0 ) {
    return (
      <div>
        <Nav/>
        <NewDressMeUser />
      </div>
    )} else 
    return (
      <div>
        <Nav/>
        <div className='dressMe'>
          <DressMeBtn dressMe={ this.dressMe }/>
          <div className='dressMeImages'>
            <div className='dressMeTop'>
              { this.state.randomTop === '' ? (
                <div>
                  <Carousel autoPlay={ false } >
                    { this.state.newTopsArray.map( ( item, i ) => 
                      <Item key={ i } item={ item } /> )}
                  </Carousel>
                </div>) : (
                <div className='randomTop'>
                  <Card style={{ marginTop: 10 }}>
                    <img src={ this.state.randomTop }
                    style={{ objectFit: 'cover' }}></img>
                  </Card>
                  <FindTopBtn findTop = { this.findTop }/>
                </div>
                )}
            </div>
            <div className='dressMeBottom'>
              { this.state.randomBottom === '' ? (
              <div>
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
                <FindBottomBtn findBottom = { this.findBottom }/>
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
