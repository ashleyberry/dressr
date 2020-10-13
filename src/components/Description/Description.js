import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// stying with material-ui
import { 
    Button, 
    Typography
  } from '@material-ui/core';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Description extends Component {

    state = {
        id: '1',
        color: 'White',
        brand: 'Calvin Klein',
        type: 'Dress',
        image_url: 'https://www.maykool.com/media/catalog/product/cache/1/image/600x900/9df78eab33525d08d6e5fb8d27136e95/w/h/white-ruched-mesh-spaghetti-straps-sexy-bodycon-mini-dress-070430_1.jpg',
        description: 'Great party dress'
    };

    // go to edit page
    onEditItem = () => {
        console.log( 'in onEditItem:' )
    } // end onEditMovie

    // delete item
    onDeleteItem = () => {
        console.log( 'in onDeleteItem:' )
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
                        variant='p'>
                        { this.state.description }
                    </Typography>
                </div>
            </div>
            <div className='descriptionBtns'
                style={{textAlign:'center'}}>
                <Button 
                    style={{marginRight:'10px'}}
                    className='editItemBtn'
                    onClick={ this.onEditItem }
                    variant='outlined'
                    color='primary'>
                    Edit Item
                </Button>
                <Button 
                    onClick= { this.onDeleteItem }
                    variant='outlined'
                    color='secondary'>Delete Item
                </Button>
            </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( Description );
