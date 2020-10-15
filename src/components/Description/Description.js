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
        id: this.props.store.recent.id,
        type_id: this.props.store.recent.type_id,
        type: this.props.store.recent.type,
        kind: this.props.store.recent.kind,
        brand: this.props.store.recent.brand,
        image_url: this.props.store.recent.image_url,
        color: this.props.store.recent.color,
        material: this.props.store.recent.material,
        description: this.props.store.recent.description
    };

    // go to edit page
    onEditItem = ( item ) => {
        console.log( 'in onEditItem:', item )
        this.props.dispatch({
            //setting recent item
            type: 'SET_BATMAN',
            payload: item
    })
    this.props.history.push('/editItem');  
  } // end onEditItem

    // delete item
    onDeleteItem = ( itemId ) => {
        console.log( 'in onDeleteItem:', itemId )
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: itemId
        })
    this.props.history.push('/home');  
    } // end onDeleteItem

  render() {

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
