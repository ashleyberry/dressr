import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';

function Welcome(props) {

  const [heading, setHeading] = useState('Welcome Back');

  return (
        <div>
            <Typography
                style={{ fontFamily: 'Quicksand' }}
                variant='h4'>
                { heading }
            </Typography>
        </div>
  );
}

export default connect(mapStoreToProps)( Welcome );
