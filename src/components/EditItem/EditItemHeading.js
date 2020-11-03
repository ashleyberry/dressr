import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';

const EditItemHeader = () => {
  const [heading, setHeading] = useState('Edit this item');

  return (
    <div style={{ textAlign: 'center'}}>
        <Typography
          style={{ fontFamily: 'Quicksand' }}
          variant='h5'>
          Edit this item
        </Typography>
    </div>
  );
}

export default connect( mapStoreToProps )( EditItemHeader );
