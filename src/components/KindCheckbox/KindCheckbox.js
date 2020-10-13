import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Checkbox } from '@material-ui/core';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.

function KindCheckbox() {

  const [ kind, setKind ]=useState([])

  this.getValue = (e) => {
    let data=kind;
    data.push( e.target.value )
    setKind( data )
    console.log( 'in getValue:', e.target.value )
  }
  return (
    <div className="kindCheckbox">
            <Checkbox 
              color="primary"
              value="Top"
              onChange={ (e) => this.getValue(e)}/>
            <Checkbox 
              color="primary"
              value="Bottom"
              onChange={ (e) => this.getValue(e)}/>
            <Checkbox 
              color="primary"
              value="Entire Outfit"
              onChange={ (e) => this.getValue(e)}/>
            <Checkbox 
              color="primary"
              value="Accessory"
              onChange={ (e) => this.getValue(e)}/>
            <Checkbox 
              color="primary"
              value="Other"
              onChange={ (e) => this.getValue(e)}/>
          </div>
  );
}

export default ( KindCheckbox );
