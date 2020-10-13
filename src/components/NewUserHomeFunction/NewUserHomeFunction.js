import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Closet(props) {
    const clothingItems = props.clothingItems;
    return (
      <div>

            
      </div>
    );
  }
  
  const messages = ['React', 'Re: React', 'Re:Re: React'];

export default connect(mapStoreToProps)( Closet );
