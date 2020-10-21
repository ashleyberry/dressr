import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Footer.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = ( props ) => {
    let loginLinkData = {
        path: '/login',
        text: '',
      };
    
      if (props.store.user.id != null) {
        loginLinkData.path = '/user';
        loginLinkData.text = 'Home';
      }

    return (
        <footer>
            <div className="footer-nav">
                {/* If the user is logged in, show these links */}
                {props.store.user.id && (
                <>
                <Link className="footer-nav-link" to={loginLinkData.path}>
                    {loginLinkData.text}
                </Link>
                <Link className="footer-nav-link" to="/addItem">
                    Add Item
                </Link>
                <Link className='footer-nav-link' to="/dressMe">
                    Dress Me
                </Link>
                <LogOutButton className="footer-nav-link" />
                </>
                )}
                
                {/* Always show this link since the about page is not protected */}
                {/* <Link className="nav-link" to="/about">
                About
                </Link> */}

            </div>
        </footer>
    )
}

export default connect( mapStoreToProps ) ( Footer );
