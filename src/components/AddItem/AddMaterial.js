import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormLabel,
    Radio, 
    RadioGroup, 
    Grid, 
    FormControlLabel } from '@material-ui/core';

class AddMaterial extends Component {

  render() {
    return (
        <div className="materialOptions" style = { { paddingTop: 15 } }> 
           <FormLabel>Material:</FormLabel>
            <RadioGroup>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        value="Cotton"              
                        label="Cotton"
                        color="primary"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Linen"
                        color="primary"
                        value="Linen"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Cashmere"
                        color="primary"
                        value="Cashmere"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
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
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Rayon"
                        color="primary"
                        value="Rayon"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <FormControlLabel
                        control={ <Radio /> }
                        label="Polyester"
                        color="primary"
                        value="Polyester"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
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
                    onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={ <Radio /> }
                    label="Spandex"
                    color="primary"
                    value="Spandex"
                    onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                    />
                  </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                      control={ <Radio /> }
                      label="Wool"
                      color="primary"
                      value="Wool"
                      onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
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
                        onChange={ ( event ) => this.props.andleChangeFor( event, 'material' )}
                      />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                        control={ <Radio /> }
                        label="Unknown"
                        color="primary"
                        value="Unknown"
                        onChange={ ( event ) => this.props.handleChangeFor( event, 'material' )}
                      />
                  </Grid>
                </Grid>
              </Grid>
            </RadioGroup>
          </div>          
    );
  }
}

export default connect( mapStoreToProps )( AddMaterial );