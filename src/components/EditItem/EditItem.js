import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './EditItem.css';

import Select from 'react-select'
// import material-ui styling
import { 
  Button, 
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
  TextField,
  Typography
} from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
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
    isOther: false
};


  onCancel = () => {
    console.log('in onCancel');
    this.props.history.push( '/home' );
  }

  onSave = () => {
    console.log('in onSave', this.state );
    this.props.dispatch({
      type: 'UPDATE_ITEM',
      payload: this.state
    })
    this.props.history.push('/home')
  }

  // updates the local state 
  handleChangeFor = ( event, propertyName ) => {
      this.setState({
          ...this.state,
          [ propertyName ]: event.target.value
      })
  }

  render() {
    return (
      <div>
      <div className ='itemHeader'>
        <Typography 
            variant='h4'>
            Edit { this.props.store.recentClothing.brand } { this.props.store.recentClothing.type }
        </Typography>
      </div>
      <div className='editItemForm'>

      {/* drop down with type names */}
        <div>
          <FormControl>
            <InputLabel htmlFor="type-native-helper">Type</InputLabel>
              <NativeSelect
                onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }
                inputProps={{
                  name: 'type',
                  id: 'type-native-helper'}}>
                <option aria-label="None" value="" />
                {this.props.store.types.map( type => {
                  return (
                    <option key={ type.id } 
                    value={ type.type }>
                    { type.type }
                    </option>
                  )
                })}
                <option onClick={ this.onOtherClick }>other</option>
              </NativeSelect>
            {/* <FormHelperText id='helper'>Type:</FormHelperText> */}
          </FormControl>
        </div>

          {/* <div className='otherHiddenField'>
            {this.state.type === 'other' ? (
              <div>
                <label htmlFor="type">What type of clothing?</label>
                <input></input>
                </div> ) : ( null
            )}
          </div> */}

        <br/>
          <div>
            <label htmlFor="type">If 'Other', enter type:</label>
            <input 
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }>
            </input>
          </div>

        <div className="kindCheckbox">
          <Checkbox 
            color="primary"
            value="Top"
            onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}/>Top
          <Checkbox 
            color="primary"
            value="Bottom"
            onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}/>Bottom
            <br/>
          <Checkbox 
            color="primary"
            value="Entire Outfit"
            onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}/>Entire Outfit
          <Checkbox 
            color="primary"
            value="Accessory"
            onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}/>Accessory
            <br/>
          <Checkbox 
            color="primary"
            value="Other"
            onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}/>Other
        </div>

        <div className="brand">
          <label htmlFor="brand">
            Brand:
          </label>
          <br/>
          <input value={ this.state.brand }
            onChange={ ( event ) => this.handleChangeFor( event, 'brand' )}></input>
        </div>

        <div className="image_Url">
          <label htmlFor="image_Url">
           Image URL:
          </label>
          <input
            onChange={ ( event ) => this.handleChangeFor( event, 'image_url' )}>
          </input>
        </div>

        <div className="colorCheckbox">
          <label htmlFor="color">
            Color:
          </label>
          <br/>
          <Checkbox 
            color="primary"
            value="Red"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Red
          <Checkbox 
            color="primary"
            value="Orange"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Orange
            <br/>
          <Checkbox 
            color="primary"
            value="Yellow"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Yellow
          <Checkbox 
            color="primary"
            value="Green"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Green
            <br/>
          <Checkbox 
            color="primary"
            value="Blue"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Blue
                        <Checkbox 
            color="primary"
            value="Purple"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Purple
                        <Checkbox 
            color="primary"
            value="Cream"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Cream
                        <Checkbox 
            color="primary"
            value="Brown"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Brown
                        <Checkbox 
            color="primary"
            value="White"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>White
                        <Checkbox 
            color="primary"
            value="Black"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Black
                        <Checkbox 
            color="primary"
            value="Grey"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Grey
                        <Checkbox 
            color="primary"
            value="Multi-color"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Multi-color
                        <Checkbox 
            color="primary"
            value="Other"
            onChange={ ( event ) => this.handleChangeFor( event, 'color' )}/>Other
        </div>

        <div className="materialCheckbox">
          <label htmlFor="material">
            Material:
          </label>
          <br/>
          <Checkbox 
            color="primary"
            value="Cotton"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Cotton
          <Checkbox 
            color="primary"
            value="Acrylic"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Acrylic
            <br/>
          <Checkbox 
            color="primary"
            value="Cashmere"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Cashmere
          <Checkbox 
            color="primary"
            value="Rayon"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Rayon
            <br/>
          <Checkbox 
            color="primary"
            value="Linen"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Linen
                        <Checkbox 
            color="primary"
            value="Nylon"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Nylon
                        <Checkbox 
            color="primary"
            value="Polyester"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Polyester
                        <Checkbox 
            color="primary"
            value="Unknown"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Unknown
                        <Checkbox 
            color="primary"
            value="Silk"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Silk
                        <Checkbox 
            color="primary"
            value="Spandex"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Spandex
                        <Checkbox 
            color="primary"
            value="Wool"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Wool
                        <Checkbox 
            color="primary"
            value="Other"
            onChange={ ( event ) => this.handleChangeFor( event, 'material' )}/>Other
        </div>

        <div className='descriptionInput'>
            <TextField 
                value={ this.state.description }
                onChange={ ( event ) => this.handleChangeFor ( event, 'description' ) } 
                type='text' 
                label='Item Description'
                variant='outlined'
                multiline
                style = { { width: 300 } }
                rowsMax={40}
                >
            </TextField>

          </div>



          <div className='descriptionBtns'
              style={{textAlign:'center'}}>
              <Button 
                  style={{marginRight:'10px'}}
                  className='editItemBtn'
                  onClick={ this.onCancel }
                  variant='outlined'
                  color='primary'>
                  Cancel
              </Button>
              <Button 
                  onClick= { this.onSave }
                  variant='outlined'
                  color='secondary'>Save
              </Button>
          </div>
      
      </div>

    </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter ( EditItem ));