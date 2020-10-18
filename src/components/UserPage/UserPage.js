import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


// import Search from '../Search/Search';
import SearchBar from "material-ui-search-bar";

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { 
  Card,
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
    const items = this.props.store.clothing.filter(( item )=>{
        if( this.state.inputValue == null) {
          return item
        } else if ( item.color.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            item.type.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.material.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            item.kind.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.description.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.brand.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
          return item
        } 
      }).map( (item, i ) =>{
       
        return (
          
          <div className='closetItem' key={ i }>
            <ul>
              <Card
              style={{ margin: 5 }}>
                  <img src={ item.image_url } 
                      value={ item.key }
                      onClick={() => this.onItemClick( item )}>
                  </img>
              <Typography variant='subtitle2'>{ item.brand }</Typography>
              </Card>
            </ul>
          </div>

      )
    })

    return (
        <div>
            <div className = 'searchBar'>
                <SearchBar 
                    style={{ width: 200, marginLeft: 20 }}
                    value={ this.state.search }
                    onChange={( newValue ) => this.setState({ inputValue: newValue })}
                    onRequestSearch={() => this.filterByInput( this.state.inputValue )}/>
                    { items.length === 0 || items === null ? (
                    <div className='newUserNotice'>
                      <Typography variant='h5'>Your closet is empty!</Typography>
                      <Typography variant='h6'>Add your first item!</Typography>
                      <LibraryAddIcon style={{ width: 50, height: 50 }} fontSize='large' onClick={ this.addItem }></LibraryAddIcon>
                    </div>
                    ) : 
                    (<div style={{ textAlign:'center' }}>{ items }</div>) }
            </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect( mapStoreToProps ) ( withRouter ( UserPage ));
