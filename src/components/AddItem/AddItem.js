import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Select from 'react-select'


// import material-ui styling
import { TextField } from '@material-ui/core';

class AddItem extends Component {
  state = {
    clothingType: '',
    heading: 'AddItem Component',
    isOther: false,
  };

  componentDidMount(){
      this.handleShow();
  }

  handleShow = () => {
      console.log( 'in handleShow:', this.state.isOther )
    if (this.state.clothingType === 'Other') {
        this.setState({
          ...this.state,
            isOther: true
        })
    }

  }

    // updates the local state movie information 
    handleChangeFor = ( event, propertyName ) => {
        console.log( 'in handleChangeFor:', event.target.value )
        this.setState({
            ...this.state,
            [ propertyName ]: event.target.value
        })
        console.log('this.state', this.state )
        this.handleShow();
    }

  render() {
    return (
        <div className='addItemForm'>
            <div className='clothingType'>
            {/* <TextField 
                  onChange={ ( event ) => this.handleChangeFor( event, 'clothingType' )  } 
                  required
                  type='text' 
                  style = { { width: 250 } }
                  label='Clothing Type'>
              </TextField> */}
                {/* <h2>{this.state.heading}</h2>
                <label htmlFor="clothingType"
                  onChange={ this.handleShow }
                  >Type:</label>
                <select 
                    onChange={ ( event ) => this.handleChangeFor ( event, 'clothingType' ) }
                    name="clothingType" id="clothingType">
                    <option value="Dress">Dress</option>
                    <option value="Skirt">Skirt</option>
                    <option value="Blouse">Blouse</option>
                    <option value="Other">Other</option>
                </select>
                <div>
                    {this.state.isOther ? 
                        <label>Please enter type:
                            <input onChange={ ( event ) => this.handleChangeFor( event, 'clothingType' )  }>
                            </input>
                        </label> : null }
                </div> */}

    {/* <div>
      <p>Type search and hit `Return` key</p>
      <Select
        multi
        create
        onCreateNew={( event ) => console.log('%c New item created ', 'background: #555; color: tomato', event )}
        options='Dress'
        values={[]}
        onChange={(value) =>
          console.log(`%c > onChange type `, 'background: #555; color: tomato', value)
        }
      />
    </div> */}




            </div>
      </div>
    );
  }
}

export default connect( mapStoreToProps )( AddItem );
