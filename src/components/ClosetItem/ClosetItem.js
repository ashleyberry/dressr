import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ClosetItem.css';
// styling via material ui
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';

class ClosetItem extends Component {

  state = {
    heading: 'ClosetItem Component',
  };

  // on item click, send to details page
  onItemClick = ( item ) => {
    console.log( 'in onItemClick:', item);
    this.props.dispatch({
      type: 'SET_BATMAN',
      payload: item
  })
  this.props.history.push('/description');  
  }

  render() {
    return (

         <div className='closetItem'>
          {/* <li key={ this.props.item.key }>
              <Card>
                <img src={ this.props.item.image_url } 
                    value={ this.props.item.key }
                    onClick={() => this.onItemClick( this.props.item ) }
                    >
                </img>
              </Card>
          </li> */}
        </div>

    );
  }
}

export default connect( mapStoreToProps ) ( withRouter( ClosetItem ));
