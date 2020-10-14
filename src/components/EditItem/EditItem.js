import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Select from 'react-select'
// import material-ui styling
import { 
  Button, 
  Checkbox,
  FormControlLabel,
  TextField,
  Typography
} from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EdiItem extends Component {
  state = {
    type: '',
    kind: '',
    brand: '',
    image_url: '',
    color: '',
    material: '',
    description: ''
  };

  onCancel = () => {
    console.log('in onCancel');
    this.props.history.push( '/home' );
  }

  onSave = () => {
    console.log('in onSave');
  }

  // updates the local state movie information 
  handleChangeFor = ( event, propertyName ) => {
      console.log( 'in handleChangeFor:', event.target.value )
      this.setState({
          ...this.state,
          [ propertyName ]: event.target.value
      })
      console.log('this.state', this.state )
  }

  render() {
    
    return (
      <div>
      <div className ='addItemHeader'>
        <Typography 
            variant='h4'>
            Edit Item
        </Typography>
      </div>

      <div className='addItemForm'>

        <div className='clothingType'>
          <label htmlFor="clothingType">
            Type:
          </label>
          <br/>
          <select 
              name="clothingType" id="clothingType"
              onChange={ ( event ) => this.handleChangeFor( event, 'type' )}>
              <option value="Dress">Dress</option>
              <option value="Skirt">Skirt</option>
              <option value="Blouse">Blouse</option>
              <option value="Other">Other</option>
          </select>
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
          <input></input>
        </div>

        <div className="image_Url">
          <label htmlFor="image_Url">
           Image URL:
          </label>
          <input></input>
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

export default connect(mapStoreToProps)( EdiItem );