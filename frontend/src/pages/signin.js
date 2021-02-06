import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      setEmailAddress: '',
      password: '',
      setPassword: '',
      error: '',
      isInvalid: this.firstName === '' || this.password === '' || this.emailAddress === '',
    }
  }


  handleSignin = (event) => {
    alert("HANDE SIGNIN");
  };

  render() {
    return (
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign In</Form.Title>
            {this.state.error && <Form.Error data-testid="error">{this.state.error}</Form.Error>}

            <Form.Base onSubmit={this.handleSignin} method="POST">
              <Form.Input
                placeholder="Email address"
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

              <Form.Link to="/signup">
                Forgot Password?
            </Form.Link>

              <Form.Submit disabled={this.state.isInvalid} type="submit" data-testid="sign-in">
                Sign In
            </Form.Submit>
            </Form.Base>

            <Form.Text>
              New to Netflix? <Form.Link to="/">Sign up now.</Form.Link>
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

export default SignIn;