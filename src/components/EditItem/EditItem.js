import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Select from 'react-select'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EdiItem extends Component {
  state = {
    type: '',
    heading: 'EdiItem Component',
  };

  render() {
    const options = [
        { value: 'Blouse', label: 'Blouse' },
        { value: 'Dress', label: 'Dress' },
        { value: 'Jeans', label: 'Jeans' },
        { value: 'Other', label: 'Other' }
      ]
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <Select options={ options } />
      </div>
    );
  }
}

export default connect(mapStoreToProps)( EdiItem );