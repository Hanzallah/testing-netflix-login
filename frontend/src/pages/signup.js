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
      firstName: '',
      emailAddress: GLOBALS.SIGNUPMAIL,
      password: '',
      error: '',
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  handleSignup = (event) => {
    alert("Signed up.");
  };

  changeName(val) {
    this.setState({ firstName : val.target.value });
  }
  changeMail(val) {
    this.setState({ emailAddress : val.target.value });
  }
  changePassword(val) {
    this.setState({ password : val.target.value });
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
                onChange={this.changeName}
              />
              <Form.Input
                placeholder="Email"
                value={this.state.emailAddress}
                onChange={this.changeMail}
              />
              <Form.Input
                type="password"
                autoComplete="off"
                placeholder="Password"
                onChange={this.changePassword}
              />
              <Form.Submit type="submit" data-testid="sign-up">
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
