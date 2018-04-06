import React, { Component } from 'react'

class FormInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type="text" name={this.props.name}/>
      </div>
    )

  }
}

export default FormInput
