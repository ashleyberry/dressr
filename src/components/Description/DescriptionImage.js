import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, 
    FormHelperText, 
    Typography } from '@material-ui/core';
import Placeholder from '../../images/placeholder-vertical.jpg';


class DescriptionImage extends Component {
    state = {
        image_url: this.props.store.recentClothing.image_url,
        description: this.props.store.recentClothing.description,
    };

  render() {
    return (
        <div className='descriptionImg'>
            <Card>
                <div style={{ display:'flex', justifyContent:'center' }}>
                    { this.state.image_url === '' ? ( 
                        <img src= { Placeholder } />
                    ) : ( 
                        <img src={ this.state.image_url }/>
                    )}
                </div> 
            </Card>
            <div className="descriptionBody" style={{textAlign: 'center'}}>
            <FormHelperText>Care / Washing Instructions</FormHelperText> 
            <div className='notes' style={{ marginTop: -5 }}><FormHelperText>or Notes:</FormHelperText></div>
            </div>
            <Typography 
                variant='body1'>
                { this.state.description }
            </Typography>
        </div>
    );
  }
}

export default connect(mapStoreToProps)( DescriptionImage );
