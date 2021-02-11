import React, { useState } from 'react';
import { Form } from '../components';
import { InHeaderContainer } from '../containers/inheader';
import { FooterContainer } from '../containers/footer';
import IdleTimerContainer from '../components/IdleTimerContainer';
import * as GLOBALS from '../GLOBALS';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      error: '',
      invalidMail: false,
      invalidPassword: false,
    }
    this.handleSignin = this.handleSignin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeEmail = event => { this.setState({ emailAddress: event.target.value }); }
  changePassword = event => { this.setState({ password: event.target.value }); }

  handleSignin = (event) => {
    var mail = this.state.emailAddress;
    var n = mail.indexOf("@");
    if (n == -1) {
      this.setState({ invalidMail: true });
    }
    if (this.state.password.length < 4) {
      this.setState({ invalidPassword: true });
    }
    else {
      const user = GLOBALS.findUser(this.state.emailAddress, this.state.password);
      if (user !== 1) {
        this.setState({ error: user });
      }
      else {
        if (GLOBALS.rememberMe) {
          GLOBALS.setUserMail(this.state.emailAddress);
        }
        GLOBALS.setIsSignedIn(true);
        alert("Signed in.");
      }
    }
  };


  handleChange = (event) => {
    GLOBALS.setRememberMe(event.target.checked);

    if (!event.target.checked) {
      GLOBALS.setUserMail("");
    }
  };

  render() {
    return (
      <>
        <IdleTimerContainer>
          <InHeaderContainer>
            <Form>
              <Form.Title id="signinLblSignin" >Sign In</Form.Title>
              <Form.Error id="signinErrErr" hidden={this.state.error === ''}>{this.state.error}</Form.Error>
              <Form.Input
                id="signinInpEmailAddress"
                placeholder="Email address"
                onChange={this.changeEmail}
              />

              <Form.InvalidText id="signinErrValidEmail" hidden={this.state.invalidMail !== true}>
                Please enter a valid email or phone number.
              </Form.InvalidText>
              <Form.Input
                id="signinInpPassword"
                type="password"
                autoComplete="off"
                placeholder="Password"
                onChange={this.changePassword}
              />


              <Form.InvalidText id="signinErrValidPassword" hidden={this.state.invalidPassword !== true}>
                Your password must contain between 4 and 60 characters.
              </Form.InvalidText>


              <Form.Label id="signinLblRememberMe">
                <input id="signinCheckBox" type="checkbox"
                  defaultChecked={GLOBALS.rememberMe}
                  onChange={this.handleChange}
                />
            Remember Me
            </Form.Label>


              <Form.Link id="signinBtnForgotPassword" to="/forgot">
                Forgot Password?
            </Form.Link>

              <Form.Submit id="signinBtnSignin" onClick={this.handleSignin} type="submit" data-testid="sign-in">
                Sign In
            </Form.Submit>
              <Form.Text>
                New to Netflix? <Form.Link id="signinBtnSignup" to="/">Sign up now.</Form.Link>
              </Form.Text>
              <Form.TextSmall id="signinLblCaptcha">
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
            </Form>
          </InHeaderContainer>
          <FooterContainer />
        </IdleTimerContainer>
      </>
    );
  }
}

export default SignIn;