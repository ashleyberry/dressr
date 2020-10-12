import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import { mdiHanger } from '@mdi/js';

const Nav = (props) => {
  console.log( 'in Nav.js props.store.user.first_name:', props.store.user.first_name)
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
    photo: ''
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
    loginLinkData.photo = <img src={ props.store.user.profile_url } className="avatar"/>
    
    
  }
console.log( 'in Nav.js')
  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">dressr</h2>
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
        <div className="image-cropper">
          { loginLinkData.photo }
        </div>
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
