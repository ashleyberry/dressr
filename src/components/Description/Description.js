import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';

import './Description.css';

// stying with material-ui
import { 
    Button,
    Card, 
    Grid,
    InputLabel,
    Typography
  } from '@material-ui/core';

class Description extends Component {

    state = {
        id: this.props.store.recentClothing.id,
        type: this.props.store.recentClothing.type,
        kind: this.props.store.recentClothing.kind,
        brand: this.props.store.recentClothing.brand,
        image_url: this.props.store.recentClothing.image_url,
        color: this.props.store.recentClothing.color,
        material: this.props.store.recentClothing.material,
        description: this.props.store.recentClothing.description,
        date_worn: this.props.store.recentClothing.date_worn
    };

    onEditItem = ( item ) => {
        this.props.dispatch({
            //setting.recentClothing item
            type: 'SET_BATMAN',
            payload: item
        })
        this.props.history.push('/editItem'); 
  } // end onEditItem

  handleChangeFor = ( event, propertyName ) => {
      console.log(' in handleChange for:', event.target.value )
    this.setState({
        ...this.state,
        [ propertyName ]: event.target.value
    })
    this.checkDate();
}

    checkDate(){
        this.setState((prevState) => {
            return {
                date_worn: prevState.date_worn};
            }, () => {
                this.updateItem( this.state )
            }
        )
    }

    updateItem = () => {
        console.log( 'in update item wtf:', this.state )
        this.props.dispatch({
            type: 'UPDATE_ITEM',
            payload: this.state
          })
    }

  render() {
    return (
        <div>
            <Nav/>
            <div className='description'>
                <div className ='descriptionHeader'>
                    <Typography 
                        style={{ fontFamily: 'Quicksand' }}
                        variant='h4'>
                        { this.state.color } { this.state.brand } { this.state.type }
                    </Typography>
                </div>
                <br/>

                <div className="dateWorn" >
                    <div style={{ textAlign: 'center' }}>
                        <InputLabel style={{display : 'inline-block'}} htmlFor="dateWorn">
                            Last worn:
                        </InputLabel>
                            { this.state.date_worn === '' || this.state.date_worn === undefined || this.state.date_worn === 'undefined' || this.state.date_worn === null ? 
                            (<input style={{display : 'inline-block'}, { marginLeft: 15 }, { fontFamily: 'Quicksand' }} type="date" 
                            id="dateWorn" 
                            name="dateWorn"
                            onChange={ ( event ) => this.handleChangeFor ( event, 'date_worn' ) }>
                        </input>) : ( <input style={{display : 'inline-block'}, { marginLeft: 15 }, { fontFamily: 'Quicksand' }} type="date" 
                            value={this.state.date_worn.split( 'T' )[0]} 
                            id="dateWorn" 
                            name="dateWorn"
                            onChange={ ( event ) => this.handleChangeFor ( event, 'date_worn' ) }>
                        </input> ) }
                        
                    </div>
                </div>
                
                <div className='descriptionImg'>
                   
                        <Card>
                            <div style={{ display:'flex', justifyContent:'center' }}>
                                <img src={ this.state.image_url }></img>
                            </div> 
                        </Card>

                        <div className='thisItemDescription' style={{ paddingTop: 10 }}>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <Grid item xs={12}>
                                        <div style={{ textTransform: 'capitalize' }}>
                                            <Typography variant='body1'>
                                                { this.state.material }
                                            </Typography>
                                        </div>
                                        <Typography 
                                            variant='body1'>
                                
                                            { this.state.description }
                                        </Typography>
                                        
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    
               </div>

            <div className="editBtn" 
                style={{ textAlign:'center', marginTop: 150 }}>
                <Button  
                    style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
                    variant="outlined" 
                    type="submit" 
                    name="submit" 
                    onClick={ () => this.onEditItem( this.state ) }>Edit Item</Button>
            </div>
</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps) (withRouter ( Description ));
