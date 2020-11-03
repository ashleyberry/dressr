import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { FormLabel, 
RadioGroup, 
Grid, 
FormControlLabel,
Radio } from '@material-ui/core';

class AddKind extends Component {

  render() {
    return (
      <div className="kindRadio"> 
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
                        onClick={ ( event ) => this.props.handleChangeFor( event, 'kind' )}/>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel 
                        control={<Radio />} 
                        label="Bottom" 
                        color='primary'
                        value="bottom" 
                        onClick={ ( event ) => this.props.handleChangeFor( event, 'kind' )}/>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel 
                        value="Accessory" 
                        color='primary' 
                        control={<Radio />} 
                        label="Accessory" 
                        onClick={ ( event ) => this.props.handleChangeFor( event, 'kind' )}/>
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
                        onClick={ ( event ) => this.props.handleChangeFor( event, 'kind' )}/>
                    </Grid>
                    <Grid item xs={4}>
                    <FormControlLabel 
                        value="Other"
                        color='primary'  
                        onClick={ ( event ) => this.props.handleChangeFor( event, 'kind' )}
                        control={<Radio />} 
                        label="Other" />
                    </Grid>
                    </Grid>
                </Grid>
            </RadioGroup>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddKind );