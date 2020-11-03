import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormLabel,
    Radio, 
    RadioGroup, 
    Grid, 
    FormControlLabel } from '@material-ui/core';

class AddColor extends Component {

  render() {
    return (
        <div className="colorOptions" style = { { paddingTop: 15 } }> 
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
                            onClick={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel                   
                            control={ <Radio /> }
                            label="Orange"
                            color="primary"
                            value="Orange"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel                
                            control={ <Radio /> }
                            label="Yellow"
                            color="primary"
                            value="Yellow"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
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
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                        />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={ <Radio /> }
                                label="Blue"
                                color="primary"
                                value="Blue"
                                onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel          
                            control={ <Radio /> }
                            label="Purple"
                            color="primary"
                            value="Purple"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
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
                                    onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                                />
                            </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                            control={ <Radio /> }
                            label="White"
                            color="primary"
                            value="White"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                        <FormControlLabel
                            control={ <Radio /> }
                            label="Cream"
                            color="primary"
                            value="Cream"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
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
                                onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                control={ <Radio /> }
                                label="Other"
                                color="primary"
                                value="Other"
                                onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                            />
                        </Grid>                
                        <Grid item xs={4}>
                        <FormControlLabel
                            control={ <Radio /> }
                            label="Multi-color"
                            color="primary"
                            value="Multi-color"
                            onChange={ ( event ) => this.props.handleChangeFor( event, 'color' )}
                        />
                    </Grid>
                    </Grid>
                </Grid>
            </RadioGroup>
        </div>       
    );
  }
}

export default connect( mapStoreToProps )( AddColor );