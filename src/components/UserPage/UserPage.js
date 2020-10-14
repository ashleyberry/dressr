import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ClosetItem from '../ClosetItem/ClosetItem';
import Search from '../Search/Search';

class UserPage extends Component {

  componentDidMount() {
    this.getClothing();
  }

  getClothing = () => {
    console.log( 'in getClothing' );
    this.props.dispatch({
      // setting our action type
      type: 'FETCH_CLOTHING'
    });
  }

  render() {
    // console.log('userpage this.props.store.clothing:', this.props.store.clothing )
    return (
      <div>
        <div>
          {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
          {/* <p>Your ID is: {this.props.store.user.id}</p> */}
        <div>
        <Search />   
        {/* </div>
          <div className='clothingList'>
              <ul>
                { this.props.store.clothing.map( item =>  
                    <ClosetItem key= { item.id } item={ item } />
                )}
              </ul>
          </div> */}
          {/* <LogOutButton className="log-in" /> */}
        </div>
      </div>
      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default connect( mapStoreToProps )( UserPage );
