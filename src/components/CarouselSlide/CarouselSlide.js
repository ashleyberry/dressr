import React from 'react';

import { 
    Paper
  } from '@material-ui/core';

function Item(props)
{
    return (
        <Paper>
            <img src={ props.item }/>
        </Paper>
    )
}

export default Item