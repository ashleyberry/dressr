import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Icon from '@mdi/react'
// import { mdiHanger } from '@mdi/js';
// import FaceIcon from '@material-ui/icons/Face';

const Nav = (props) => {
console.log( 'props.store.user:', props.store.user )
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };
  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = '';
  }
  // if ( props.store.user.profile_url != null ) {
  //   loginLinkData.photo = <img className="avatar" src={ props.store.user.profile_url } />
  // }

  return (
    <div className="nav">
      <Link to="/home">
        <Typography
          variant='h3'
          className="nav-title">dressr
        </Typography>
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <div className="image-cropper">
              { props.store.user.profile_url.length === 0 ? 
              (<AccountCircleIcon className= "avatar" fontSize={ 'large' }></AccountCircleIcon>) : 
               (<img className="avatar" src={ props.store.user.profile_url } />) }
            </div>
            {/* <Link className="nav-link" to="/info">
              Info Page
            </Link> */}
            {/* <LogOutButton className="nav-link" /> */}
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
        
        
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
