import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './AddItem.css';

// import material-ui styling
import { 
  Button, 
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  NativeSelect,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from '@material-ui/core';


class AddItem extends React.Component {

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
    console.log('in onSave:', this.state );
    this.props.dispatch({
      type: 'ADD_ITEM',
      payload: this.state
    })
    this.props.history.push( '/home' );
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
      {/* <h1>Hello, {this.props} </h1> */}
      <div>
        <div className ='itemHeader'>
          <Typography 
              variant='h4'>
              Add Item
          </Typography>
        </div>

        <div className='addItemForm'>
          
            <InputLabel 
            className ="type"
            variant="outlined"
              htmlFor="type-native-helper">
              Type
            </InputLabel>
            <Select
              native
              label='Type'
              variant="outlined"
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }
              inputProps={{
                name: 'type',
                id: 'type-native-helper'}}>
              <option aria-label="None" value="" />
              { this.props.store.types.map( type => {
                return (
                  <option key={ type.id } 
                  value={ type.type }>
                  { type.type }
                  </option>
                )
              })}
              <option>other</option>
            </Select>
            
          <br/>
          
              <TextField className="otherType"
                style = { { paddingTop: 5 } }
                htmlFor="type-other-native-helper"
                id='outlined-basic'
                variant="outlined"
                label="If 'Other', enter type:"
                onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }>
              </TextField>

          <br/>
          
          <div>
            <FormLabel style = { { paddingTop: 10 } }
            className="kindRadio">Kind:</FormLabel>
            <RadioGroup 
              row aria-label="kind" 
              name="kind" 
              onChange={ ( event ) => this.handleChangeFor( event, 'kind' )}>
              <FormControlLabel value="Top" control={<Radio />} label="Top" />
              <FormControlLabel value="Bottom" control={<Radio />} label="Bottom" />
              <FormControlLabel value="Entire Outfit" control={<Radio />} label="Entire Outfit" />
              <FormControlLabel value="Accessory" control={<Radio />} label="Accessory" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            </div>
          <br/>

          <TextField className="brand"
            htmlFor="brand"
            label="Brand"
            variant="outlined"
            onChange={ ( event ) => this.handleChangeFor( event, 'brand' )}>
          </TextField>

          <br/>

          <TextField className="image_Url"
            htmlFor="image_Url"
            label='Image URL:'
            variant="outlined"
            onChange={ ( event ) => this.handleChangeFor( event, 'image_url' )}>
          </TextField>
          
          <br/>
          <FormLabel style = { { paddingTop: 10 } }
            className="colorOptions">Color:</FormLabel>
                <div>
                  <RadioGroup>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                  control={ <Radio /> }
                  label="Red"
                  color="primary"
                  value="Red"
                  onClick={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
              
                  control={ <Radio /> }
                  label="Orange"
                  color="primary"
                  value="Orange"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
            
                  control={ <Radio /> }
                  label="Yellow"
                  color="primary"
                  value="Yellow"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <FormControlLabel
         
                  control={ <Radio /> }
                  label="Green"
                  color="primary"
                  value="Green"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
      
                  control={ <Radio /> }
                  label="Blue"
                  color="primary"
                  value="Blue"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
              </Grid>
              <Grid item xs={4}>
                <FormControlLabel
    
                  control={ <Radio /> }
                  label="Purple"
                  color="primary"
                  value="Purple"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
              </Grid>
          </Grid>
        </Grid>

          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
              <FormControlLabel
                control={ <Radio /> }
                label="Black"
                color="primary"
                value="Black"
                onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
              />
          </Grid>
              <Grid item xs={4}>
              <FormControlLabel
        
                  control={ <Radio /> }
                  label="White"
                  color="primary"
                  value="White"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
          </Grid>
              <Grid item xs={4}>
              <FormControlLabel
        
                  control={ <Radio /> }
                  label="Cream"
                  color="primary"
                  value="Cream"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
          </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
          
                  control={ <Radio /> }
                  label="Multi-color"
                  color="primary"
                  value="Multi-color"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
          
                  control={ <Radio /> }
                  label="Other"
                  color="primary"
                  value="Other"
                  onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                />
            </Grid>
          </Grid>
          </RadioGroup>
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
                  rowsMax={ 40 }
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
    
      </div>
        
    );
  }
}

export default connect( mapStoreToProps ) ( withRouter ( AddItem ));
