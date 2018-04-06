import React, { Component } from 'react'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        firstName: ''
        lastName: ''
        address: ''
        city: ''
        state: ''
        zipCode: ''
        phoneNumber: ''
        email: ''
      }
    }
  }


  handleChange(event) {
    this.setState({
      newPayload = event.target.payload
      payload: newPayload
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    alert("Your form was submitted" + this.state.payload)
    }
  }


  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        <fieldset>
        <FormContainer
          label='Shipping Address'
          payload={this.state.payload}

        />
        <input type="submit" value="Submit" className="button" onClick={this.handleFormSubmit}/>
      </form>
    )



export default FormContainer
