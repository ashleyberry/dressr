import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Searchish from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';
import './UserPage.css';


// import Search from '../Search/Search';

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { 
  Typography 
} from '@material-ui/core/';
import './UserPage.css';

class UserPage extends Component {

  state = {
    inputValue: ''
  }

  componentDidMount() {
    this.getInfo();
  }

  addItem = () => {
    this.props.history.push('/addItem')
  }

  getInfo = () => {
    this.props.dispatch({
      type: 'FETCH_CLOTHING'
    });
    this.props.dispatch({
      type: 'FETCH_TYPES'
    });
  }

  // on item click, send to details page
  onItemClick = ( item ) => {
    console.log( 'in onItemClick:', item );
    this.props.dispatch({
      // set recently clicked item
        type: 'SET_BATMAN',
        payload: item
    })
    this.props.history.push('/description');  
  }

  render() {
    if ( this.props.store.clothing.length === 0 ) {
      return (
        <div className='userPage'>
          <Nav/>
      <div className='newUserNotice'>
        <Typography variant='h5'>Your closet is empty!</Typography>
        <Typography variant='h6'>Add your first item!</Typography>
        <LibraryAddIcon style={{ width: 50, height: 50 }} fontSize='large' onClick={ this.addItem }></LibraryAddIcon>
    </div>
    </div>
    )
    } else { 
    return (
        <div>
          <div>
            <Nav/>
          </div>
                <Searchish></Searchish>
        </div>
    );
  }
}
}

// this allows us to use <App /> in index.js
export default connect( mapStoreToProps ) ( withRouter ( UserPage ));
