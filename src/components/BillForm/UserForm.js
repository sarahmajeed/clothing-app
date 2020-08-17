import React, { Component } from "react";

import { FormPersonalDetails } from "./FormPersonalDetails";
import { FormBillingDetails } from "./FormBillingDetails";
import { Confirm } from "./Confirm";

export class UserForm extends Component {
  state = {
    step: 1,
    Name: "",
    Email: "",
    Address: "",
    City: "",
    PhoneNumber: "",
    CardNumber: "",
    Comments: "",
  };

  //Next Stepp
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Previous Stepp
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //feild change handler
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      Name,
      Email,
      Address,
      City,
      PhoneNumber,
      CardNumber,
      Comments,
    } = this.state;
    const value = {
      Name,
      Email,
      Address,
      City,
      PhoneNumber,
      CardNumber,
      Comments,
    };
    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={value}
          />
        );
      case 2:
        return (
          <FormBillingDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            value={value}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            value={value}
          />
        );
      case 4:
        return <h1>Success</h1>;
      default:
        return <h1>Error</h1>;
    }
  }
}

export default UserForm;
