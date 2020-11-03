import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './AddItem.css';
import swal from 'sweetalert';
import ItemHeader from './AddItemHeading';
import AddImageUrl from './ImageUrl';
import AddBrand from './Brand';
import AddColor from './Color';
import AddDescription from './ItemDescription';
import AddMaterial from './Material';
import AddType from './Type';
import AddKind from './Kind';
import DescriptionBtns from './DescriptionBtns';


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
    // add new type to database if type is "other" and state type is not empty
    if (this.state.type !== '' && this.state.isOther === true ){
      this.props.dispatch({
        type: 'ADD_TYPE',
        payload: this.state
      })
    }
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
        <div className='addItemForm'>
          <ItemHeader />
          <AddImageUrl handleChangeFor = { this.handleChangeFor } image_url = { this.state.image_url }/>
          <AddBrand handleChangeFor = { this.handleChangeFor }/>
          <AddType handleChangeFor = { this.handleChangeFor } isOther = { this.state.isOther }/>
          <AddKind handleChangeFor = { this.handleChangeFor }/>
          <AddColor handleChangeFor = { this.handleChangeFor }/>
          <AddMaterial handleChangeFor = { this.handleChangeFor }/>
          <AddDescription handleChangeFor = { this.handleChangeFor }/>
          <DescriptionBtns onCancel={ this.onCancel } onSave={ this.onSave }/>
        </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps ) ( withRouter ( AddItem ));