import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Description.css';
import DescriptionHeader from './DescriptionHeader';
import DescriptionImage from './DescriptionImage';
import DescriptionMaterial from './DescriptionMaterial';
// stying with material-ui
import { 
    Button,
    Card, 
    FormHelperText,
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

    // sends user to edit page after dispatching item to recent clothing reducer
    onEditItem = ( item ) => {
        this.props.dispatch({
            //setting.recentClothing item
            type: 'SET_BATMAN',
            payload: item
        })
        this.props.history.push( '/editItem' ); 
    } // end onEditItem

    handleChangeFor = ( event, propertyName ) => {
        // console.log(' in handleChange for:', event.target.value )
        //set a new state
        this.setState({
            ...this.state,
            // updating property to be selected value
            [ propertyName ]: event.target.value
        })
        this.checkDate();
    } // end handleChangeFor

    checkDate(){
        this.setState(( prevState ) => {
            return {
                date_worn: prevState.date_worn};
            }, () => {
                this.updateItem( this.state )
            }
        )
    } // end checkDate

    // dispatches state to clothing saga to edit clothing item
    updateItem = () => {
        // console.log( 'in update item:', this.state )
        this.props.dispatch({
            type: 'UPDATE_ITEM',
            payload: this.state
          })
    } // end updateItem

  render() {
    return (
        <div>
        <Nav/>
        <DescriptionHeader />
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
                        </input>) : 
                        ( <input style={{display : 'inline-block'}, { marginLeft: 15 }, { fontFamily: 'Quicksand' }} type="date" 
                            value={this.state.date_worn.split( 'T' )[0]} 
                            id="dateWorn" 
                            name="dateWorn"
                            onChange={ ( event ) => this.handleChangeFor ( event, 'date_worn' ) }>
                        </input> ) }  
            </div>
        </div>
        <DescriptionMaterial/>
        <DescriptionImage/>
        <div className="editBtn" 
            style={{ textAlign:'center', marginTop: 150 }}>
            <Button  
                style={{ color: 'white', fontSize: 18, background: 'linear-gradient(45deg, #1098cd 30%, #10bfcd 90%)'}}
                variant="outlined" 
                type="submit" 
                name="submit" 
                onClick={ () => this.onEditItem( this.state ) }>Edit Item</Button>
        </div>
        <footer class="footer-nav"></footer>
    </div>
    );
  }
}

export default connect(mapStoreToProps) (withRouter ( Description ));
