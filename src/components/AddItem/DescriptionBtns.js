import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import CancelBtn from './CancelBtn';
import SaveBtn from './SaveBtn';

class DescriptionBtns extends Component {

  render() {
    return (
      <div className='descriptionBtns' style={{textAlign:'center' }}>
            <CancelBtn onCancel={ this.props.onCancel }/>
            <SaveBtn onSave={ this.props.onSave }/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)( DescriptionBtns );