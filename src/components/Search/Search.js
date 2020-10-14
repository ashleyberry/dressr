import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchBar from "material-ui-search-bar";
import Card from '@material-ui/core/Card';
import './Search.css';

class TemplateClass extends Component {
    state = {
        inputValue: '',
      }

    filterByInput = ( input ) => {
    console.log( 'in filterByInput:', input )
    console.log( 'this.state:', this.state )

    // return this.props.store.clothing.filter( item => item.includes(this.state.inputValue))
    }

  render() {
    console.log( 'in search.js: this.props.store.clothing', this.props.store.clothing )

    const items = this.props.store.clothing.filter(( item )=>{
        if( this.state.inputValue == null) 
          return item
         else if (item.color.toLowerCase().includes(this.state.inputValue.toLowerCase())) {
          return item
        }
      }).map(item=>{
        return (
        <div className='closetItem'>
          <ul>
            <Card>
                <img src={ item.image_url } 
                    value={ item.key }>
                </img>
            </Card>
          </ul>
        </div>
      )
    })


    return (
      <div>
        <SearchBar 
              value={ this.state.search }
              onChange={( newValue ) => this.setState({ inputValue: newValue })}
              onRequestSearch={() => this.filterByInput( this.state.inputValue )}/>
              { items }
      </div>
    );
  }
}

export default connect(mapStoreToProps)(TemplateClass);
