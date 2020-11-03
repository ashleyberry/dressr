import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './AddItem.css';
import swal from 'sweetalert';
import ItemHeader from './AddItemHeading';
import AddImageUrl from './AddImageUrl';
import AddBrand from './AddBrand';
import AddColor from './AddColor';
import AddDescription from './AddDescription';
import AddMaterial from './AddMaterial';
import AddType from './AddType';
import AddKind from './AddKind';
// import material-ui styling
import { Button } from '@material-ui/core';

class AddItem extends Component {

  state = {
    type: '',
    kind: '',
    brand: '',
    image_url: '',
    color: '',
    material: '',
    description: '',
    isOther: false
  };

  // updates the local state clothing information 
  handleChangeFor = ( event, propertyName ) => {
      // sets local state isOther
      if ( event.target.value === 'other' && propertyName === 'type') {
        this.setState({
          ...this.State,
          isOther: true
          })
        } else {
      this.setState({
          ...this.state,
          [ propertyName ]: event.target.value
      })
    }
  }

  // send user back to home page
  onCancel = () => {
    this.props.history.push( '/home' );
  }

  // when save button is clicked, dispatch info to respective databases
  onSave = () => {
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: this.state
    })
    this.props.dispatch({
      type: 'ADD_TYPE',
      payload: this.state
    })
    this.addedAlert();
  }

  addedAlert = () => {
    // alert user that item has been successfully added
    swal({
      title: "Nice!",
      text: "Your item has been added!",
      icon: "success",
    });
    this.onCancel();
  }

  render() {
    return (
      <div>
        <Nav/>
        <ItemHeader />
        <div className='addItemForm'>
          <AddImageUrl handleChangeFor = { this.handleChangeFor } image_url = { this.state.image_url }/>
          <AddBrand handleChangeFor = { this.handleChangeFor }/>
          <AddType handleChangeFor = { this.handleChangeFor } isOther = { this.state.isOther }/>
          <AddKind handleChangeFor = { this.handleChangeFor }/>
          <AddColor handleChangeFor = { this.handleChangeFor }/>
          <AddMaterial handleChangeFor = { this.handleChangeFor }/>
          <AddDescription handleChangeFor = { this.handleChangeFor }/>
        </div>
        <div className='descriptionBtns' style={{ textAlign:'center' }}>
          <Button 
              className='editItemBtn'
              onClick={ this.onCancel }
              variant='outlined'
              color='primary'>
              Cancel
          </Button>
          <Button 
              style={{ marginLeft:'10px' }}
              onClick= { this.onSave }
              variant='outlined'
              color='secondary'>Save
          </Button>
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps ) ( withRouter ( AddItem ));
