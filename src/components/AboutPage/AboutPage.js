import React from 'react';

import { Typography } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'



const AboutPage = () => (
  <div className="container">
    <div>
      <Typography variant='h4'>About:</Typography>
      <Typography variant='body1'>
        Inspired by the masterpiece film Clueless, dressr is a responsive, 
        full-stack mobile application which allows a user to create their own personalized virtual closet to access and search at any time. 
        If the user needs a little bit of inspiration, dressr has a feature to create random outfits!
      </Typography>
      
      <br/>

      <Typography variant='h4'>Technologies used:</Typography>
      <Typography variant='body1'>React, Redux, Node, Express, and Material UI</Typography>
    </div>
  </div>
);

export default AboutPage;
