import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SearchBar from "material-ui-search-bar";
import Card from '@material-ui/core/Card';
import { withRouter } from 'react-router-dom';

import './Search.css';

class Search extends Component {


  

export default connect( mapStoreToProps ) ( withRouter ( Search ) );
