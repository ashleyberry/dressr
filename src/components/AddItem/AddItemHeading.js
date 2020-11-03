import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';

const AddItemHeader = props => {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [heading, setHeading] = useState('Add an item');

  return (
    <div className='itemHeader'>
        <Typography 
            style={{ fontFamily: 'Quicksand' }}
            variant='h4'>
            { heading }
        </Typography>
    </div>
  );
}

export default connect( mapStoreToProps )( AddItemHeader );
