import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Card, Typography } from '@material-ui/core';
import EditImage from './EditImage';

const EditItemHeader = () => {
  const [heading, setHeading] = useState('Edit this item');

  return (
    <div className='descriptionImg' style={{ textAlign: 'center'}}>
      <Card>
        <Typography
          style={{ fontFamily: 'Quicksand' }}
          variant='h5'>
          Edit this item
        </Typography>
        <EditImage />  
      </Card>
    </div>
  );
}

export default connect( mapStoreToProps )( EditItemHeader );
