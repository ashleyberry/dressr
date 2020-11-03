import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './EditItem.css';
import DeleteInfo from './DeleteInfo';
import EditItemHeader from './EditItemHeading';
import EditBrand from './EditBrand';
import EditType from './EditType';
import swal from '@sweetalert/with-react';

// import material-ui styling
import { 
  Button, 
  Grid,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from '@material-ui/core';

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
          <DeleteInfo/>
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
          <EditBrand handleChangeFor = { this.handleChangeFor }/>
          <EditType handleChangeFor = { this.handleChangeFor }/>
      
          <div className="hiddenOther"
            style = { { paddingTop: 10 } }>
            { this.state.isOther === false ? (
              null ) : ( <TextField className="otherType"
              id="outlined-basic" 
              label="If 'Other', enter type:" 
              variant="outlined" 
              onChange={ ( event ) => this.handleChangeFor ( event, 'type' ) }>
            </TextField>
            )}
          </div>

       <div className="kindRadio"
            style = { { paddingTop: 15 } }>
            <FormLabel>Kind:</FormLabel>
              <RadioGroup>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={ <Radio />}
                      label='Top'
                      color='primary'
                      value='top'
                      onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControlLabel 
                    control={<Radio />} 
                    label="Bottom" 
                    color='primary'
                    value="bottom" 
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControlLabel 
                      value="Accessory" 
                      color='primary' 
                      control={<Radio />} 
                      label="Accessory" 
                      onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel 
                    value="Outfit" 
                    color='primary'
                    control={<Radio />} 
                    label="Outfit" 
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}/>
                  </Grid>

                  <Grid item xs={4}>
                  <FormControlLabel 
                    value="Other"
                    color='primary'  
                    onClick={ ( event ) => this.handleChangeFor( event, 'kind' )}
                    control={<Radio />} 
                    label="Other" />
                </Grid>

                </Grid>
              </Grid>
          
            </RadioGroup>
          </div>


        <div className="image_Url"
          style = { { paddingTop: 20 } }>
          <TextField 
            htmlFor="image_Url"
            label='Image URL:'
            variant="outlined"
            onChange={ ( event ) => this.handleChangeFor( event, 'image_url' )}>
          </TextField>
        <div>
          
            </div>
          </div>

        <div className="colorOptions" 
            style = { { paddingTop: 15 } }>
            <FormLabel >
              Color:
            </FormLabel>
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

              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Pink"
                        color="primary"
                        value="Pink"
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
                  
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Multi-color"
                        color="primary"
                        value="Multi-color"
                        onChange={ ( event ) => this.handleChangeFor( event, 'color' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
          </div>       

        <div className="materialOptions" 
            style = { { paddingTop: 15 } }>
            <FormLabel >
              Material:
            </FormLabel>
            <RadioGroup>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        value="Cotton"              
                        label="Cotton"
                        color="primary"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Linen"
                        color="primary"
                        value="Linen"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Cashmere"
                        color="primary"
                        value="Cashmere"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Nylon"
                        color="primary"
                        value="Nylon"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Rayon"
                        color="primary"
                        value="Rayon"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Polyester"
                        color="primary"
                        value="Polyester"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Silk"
                    color="primary"
                    value="Silk"
                    onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Spandex"
                    color="primary"
                    value="Spandex"
                    onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                    />
                  </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                      control={ <Radio /> }
                      label="Wool"
                      color="primary"
                      value="Wool"
                      onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Other"
                        color="primary"
                        value="Other"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Unknown"
                        color="primary"
                        value="Unknown"
                        onChange={ ( event ) => this.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
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
              rows={4}
              rowsMax={4}
              >
          </TextField>
          <FormHelperText>Add Care / Washing Instructions or a Note</FormHelperText>
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
                  onClick= { this.onSaveClick }
                  variant='contained'
                  >Save
              </Button>
              <br/>
              <Button 
                    style={{ marginTop: 10 }}
                    onClick= { this.onDeleteClick }
                    variant='contained'
                    color='secondary'>Delete Item
                </Button>
          </div>
      
      </div>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(withRouter ( EditItem ));