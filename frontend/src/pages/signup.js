// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as GLOBALS from '../GLOBALS';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: 'cancel',
      firstName: '',
      setFirstName: '',
      emailAddress: GLOBALS.SIGNUPMAIL,
      setEmailAddress: '',
      password: '',
      setPassword: '',
      error: '',
      isInvalid: this.firstName === '' || this.password === '' || this.emailAddress === '',
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignup = (event) => {
    alert("CALISIYO BABACAN");
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    return (
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {this.error && <Form.Error>{this.error}</Form.Error>}

            <Form.Base onSubmit={this.handleSignup}>
              <Form.Input
                placeholder="First name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <Form.Input
                placeholder="Email"
                value={this.state.emailAddress}
                onChange={this.handleChange}
              />
              <Form.Input
                type="password"
                value={this.state.password}
                autoComplete="off"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <Form.Submit disabled={this.state.isInvalid} type="submit" data-testid="sign-up">
                Sign Up
              </Form.Submit>
            </Form.Base>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form>
        </HeaderContainer>
        <FooterContainer />
      </>
    );
  }
}
export default SignUp;
