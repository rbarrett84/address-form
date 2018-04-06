import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" {this.props.payload}/>
      </div>
    )

  }
}

export default FormInput
