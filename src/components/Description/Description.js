import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './Description.css';

// stying with material-ui
import { 
    Button, 
    Typography
  } from '@material-ui/core';

class Description extends Component {

    state = {
        id: this.props.store.recentClothing.id,
        type: this.props.store.recentClothing.type,
        kind: this.props.store.recentClothing.kind,
        brand: this.props.store.recentClothing.brand,
        image_url: this.props.store.recentClothing.image_url,
        color: this.props.store.recentClothing.color,
        material: this.props.store.recentClothing.material,
        description: this.props.store.recentClothing.description
    };

    // delete item
    onDeleteItem = ( itemId ) => {
        // console.log( 'in onDeleteItem:', itemId )
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: itemId
        })
    this.props.history.push('/home');  
    } // end onDeleteItem

    onEditItem = ( item ) => {
        console.log( 'in onEditItem:', item )
        this.props.dispatch({
            //setting.recentClothing item
            type: 'SET_BATMAN',
            payload: item
        })
        this.props.history.push('/editItem'); 
  } // end onEditItem


  render() {
    console.log( 'DESCRIPTION this.props.store:', this.props.store )
    console.log( 'DESCRIPTION this.state:', this.state )
    return (
        <div>
            <div className='description'>
                <div className ='descriptionHeader'>
                    <Typography 
                        variant='h4'>
                        { this.state.color } { this.state.brand } { this.state.type }
                    </Typography>
                </div>
                <br/>
                <div className='descriptionImg'>
                    <img src={ this.state.image_url }></img>
                </div>
                <div className='itemDescription'>
                    <Typography 
                        variant='body1'>
                        { this.state.description }
                    </Typography>
                </div>
            </div>
            <div className='descriptionBtns'
                style={{textAlign:'center'}}>
  
                <Button 
                    style={{marginRight:'10px'}}
                    className='editItemBtn'
                    onClick={ () => this.onEditItem( this.state ) }
                    variant='outlined'
                    color='primary'>
                    Edit Item
                </Button>
        
           
                    <Button 
                        onClick= { () => this.onDeleteItem( this.state.id ) }
                        variant='outlined'
                        color='secondary'>Delete Item
                    </Button>
            </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps) (withRouter ( Description ));
