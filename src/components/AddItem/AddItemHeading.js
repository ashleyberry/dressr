import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';

const AddItemHeader = () => {
  const [heading, setHeading] = useState('Add an item');

  return (
    <div style={{ textAlign: 'center'}}>
        <Typography 
            style={{ fontFamily: 'Quicksand' }}
            variant='h4'>
            { heading }
        </Typography>
    </div>
  );
}

export default connect( mapStoreToProps )( AddItemHeader );