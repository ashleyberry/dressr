

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TypeToggle extends Component {
  state = {
    heading: 'Class Component',
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="type">
            SURPRISE!
          </label>
          <input
            hidden={ ( this.state.type === 'other' ) ? false : true } ></input>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( TypeToggle );



