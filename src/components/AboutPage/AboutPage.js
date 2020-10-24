import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <p>
        Inspired by the masterpiece film Clueless, dressr is a responsive, 
        full-stack web application that allows a user to create their own personalized virtual closet to access at any time. 
        With dressr, the user can easily access and sort through their entire wardrobe. 
        Additionally, if the user needs a little bit of inspiration, the app has a feature to create random outfits!
      </p>
    </div>
  </div>
);

export default AboutPage;
