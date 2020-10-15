import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import Search from '../Search/Search';
import SearchBar from "material-ui-search-bar";
import Card from '@material-ui/core/Card';
import './UserPage.css';

class UserPage extends Component {

  state = {
    inputValue: ''
  }

  // on item click, send to details page
  onItemClick = ( item ) => {
    console.log( 'in onItemClick:', item );
    this.props.dispatch({
      // set recently clicked item
        type: 'SET_BATMAN',
        payload: item
    })
    this.props.dispatch({
      type: 'FETCH_TYPE',
      payload: item.id
    })
    this.props.history.push('/description');  
  }


  render() {
    const items = this.props.store.clothing.filter(( item )=>{
        if( this.state.inputValue == null) {
          return item
        } else if ( item.color.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            // item.type.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.material.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
            item.kind.toLowerCase().includes(this.state.inputValue.toLowerCase()) || 
            item.brand.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
          return item
        } 
      }).map( item=>{

        return (
        <div className='closetItem'>
          <ul>
            <Card>
                <img src={ item.image_url } 
                    value={ item.key }
                    onClick={() => this.onItemClick( item )}>
                </img>
            </Card>
          </ul>
        </div>
      )
    })


    return (
        <div>
            <div className = 'searchBar'>
                <SearchBar 
                    style={{ width: 200 }}
                    value={ this.state.search }
                    onChange={( newValue ) => this.setState({ inputValue: newValue })}
                    onRequestSearch={() => this.filterByInput( this.state.inputValue )}/>
                    { items }
            </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect( mapStoreToProps )( UserPage );
