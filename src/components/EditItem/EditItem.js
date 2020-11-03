import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './EditItem.css';
import EditItemHeader from './EditItemHeading';
import Brand from '../AddItem/Brand';
import CancelBtn from '../AddItem/CancelBtn';
import Color from '../AddItem/Color';
import DeleteBtn from './DeleteBtn';
import ImageUrl from '../AddItem/ImageUrl';
import ItemDescription from '../AddItem/ItemDescription';
import Kind from '../AddItem/Kind';
import Material from '../AddItem/Material';
import Type from '../AddItem/Type';
import SaveBtn from '../AddItem/SaveBtn';
import swal from '@sweetalert/with-react';

// import material-ui styling
import { Typography } from '@material-ui/core';

class EditItem extends Component {

  state = {
    id: this.props.store.recentClothing.id,
    type: this.props.store.recentClothing.type,
    kind: this.props.store.recentClothing.kind,
    brand: this.props.store.recentClothing.brand,
    image_url: this.props.store.recentClothing.image_url,
    color: this.props.store.recentClothing.color,
    material: this.props.store.recentClothing.material,
    description: this.props.store.recentClothing.description,
    date_worn: this.props.store.recentClothing.date_worn,
    isOther: false
};

  // upon clicking cancel button, user is sent to home page
  onCancel = () => {
    this.props.history.push( '/home' );
  }

  onSaveClick = () => {
    swal({
      title: "Your item was updated!",
      icon: "success",
    });
      this.onSave();
  }

  onSave = () => {
    this.props.dispatch({
      type: 'UPDATE_ITEM',
      payload: this.state
    })
    this.props.history.push('/home')
  }

  // delete alert
  onDeleteClick = () => {
    swal({
      title: "Are you sure?",
      text: "This can't be undone!",
      icon: "warning",
      buttons: [ "AS IF!", true ],
      dangerMode: true,
      }).then(( willDelete ) => {
        if ( willDelete ) {
        this.onDeleteItem( this.state.id )
        swal( 
        <div>
          <hr/>
          <Typography style={{ marginTop: 20 }}variant='body1'>DONATE</Typography> 
            <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/Donate_Icon.png?name=Donate_Icon.png'></img>

          <Typography><a href="https://www.homelessshelterdirectory.org/" target="_blank"><b>Find nearby locations</b></a> to donate your gently-used clothing for those in need.</Typography>
          <Typography style={{ marginTop: 20 }} variant='body1'>RECYCLE</Typography>
            <img style={{ width: 100, height: 70 }} src='https://www.roadrunnerwm.com/hs-fs/hubfs/RecycleClothing_Icon.png?name=RecycleClothing_Icon.png'></img>

          <Typography variant='body1'> Too worn out to donate?</Typography> 
          <Typography variant='body1'>Nearly 100% of textiles can be recycled!</Typography>
        </div>
        , {
          title: "Deleted!",
          icon: "success",
          });
        }
    })
  }

  // delete item
  onDeleteItem = ( itemId ) => {
    this.props.dispatch({
        type: 'DELETE_ITEM',
        payload: itemId
    })
  this.props.history.push('/home');  
  } // end onDeleteItem

  // updates the local state 
  handleChangeFor = ( event, propertyName ) => {
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

  render() {
    return (
      <div>
        <Nav/>
        <EditItemHeader/>
        <div className='editItemForm'>
          <ImageUrl handleChangeFor = { this.handleChangeFor } image_url = { this.state.image_url }/>
          <Brand handleChangeFor = { this.handleChangeFor }/>
          <Type handleChangeFor = { this.handleChangeFor } isOther = { this.state.isOther }/>
          <Kind handleChangeFor = { this.handleChangeFor }/>
          <Color handleChangeFor = { this.handleChangeFor }/>
          <Material handleChangeFor = { this.handleChangeFor }/>
          <ItemDescription handleChangeFor = { this.handleChangeFor }/>
          <div className='descriptionBtns' style={{textAlign:'center'}}>
            <CancelBtn onCancel={ this.onCancel }/>
            <SaveBtn onSave={ this.onSaveClick }/>
            <DeleteBtn onDeleteClick={ this.onDeleteClick }/>
          </div>
        </div>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(withRouter ( EditItem ));