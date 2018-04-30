import React, { Component } from 'react'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: ''
      }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {

    this.setState({
      firstName: event.target.firstName,
      lastName: event.target.lastName,
      address: event.target.address,
      city: event.target.city,
      state: event.target.state,
      zipCode: event.target.zipCode,
      phoneNumber: event.target.phoneNumber,
      email: event.target.email
    })
  }

  render() {


  return (
      <form className="callout">
        <label>
          Address Form:
        <input placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
        <input placeholder="Last Name"value={this.state.lastName} onChange={this.handleChange} />
        <input placeholder="Address" value={this.state.address} onChange={this.handleChange} />
        <input placeholder="City" value={this.state.city} onChange={this.handleChange} />
        <input placeholder="State" value={this.state.state} onChange={this.handleChange} />
        <input placeholder="Zip Code" value={this.state.zipCode} onChange={this.handleChange} />
        <input placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} />
        <input placeholder="Email" value={this.state.email} onChange={this.handleChange} />

        </label>
      </form>
    );
  }
}




export default FormContainer
