import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ClosetItem.css';
// styling via material ui
import Card from '@material-ui/core/Card';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ClosetItem extends Component {

  state = {
    heading: 'ClosetItem Component',
  };

    // getting our selected item's id
    onGetInfo = () => {
      console.log('onGetInfo this.state', this.state);
      // first dispatch to get selected movie's genre(s)
      this.props.dispatch({
        type: 'FETCH_GENRE', 
        payload: this.state});
      // second dispatch to get selected movie's info
      this.props.dispatch({
        type: 'FETCH_MOVIE', 
        payload: this.state});
      // sends user to details page
      this.props.history.push( '/details' );
    } // end onGetInfo

  render() {
    return (

         <div className='closetItem'>
          <li key={ this.props.item.key }>
              <Card>
                <img src={ this.props.item.image_url } 
                    value={ this.props.item.key }
                    onClick={ this.onGetInfo }
                    >
                </img>
              </Card>
          </li>
        </div>

    );
  }
}

export default connect( mapStoreToProps )( ClosetItem );
