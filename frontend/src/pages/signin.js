import React, { useState } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

  changeEmail = event => { this.setState({ emailAddress: event.target.value }); console.log("mail:" + this.state.emailAddress); }
  changePassword = event => { this.setState({ password: event.target.value }); console.log("password" + this.state.password); }

  handleSignin = (event) => {
    var mail = this.state.emailAddress;
    var n = mail.indexOf("@");
    console.log("index:" + n)
    if (n == -1) {
      this.setState({ invalidMail: true });
      //return <Route exact path='/'/>;
    }
    else if (this.state.password.length < 4) {
      this.setState({ invalidPassword: true });
    }
    else {
      if (GLOBALS.rememberMe) {
        GLOBALS.setUserMail(this.state.emailAddress);
      }
      alert("Signed in.");
    }
  };


  handleChange = (event) => {
    GLOBALS.setRememberMe(event.target.checked);

    if (!event.target.checked) {
      GLOBALS.setUserMail("");
    }
  };

  render() {
    console.log("list:" + this.state.invalidMail)
    //document.getElementById("myDIV").style.display = "none";
    return (
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign In</Form.Title>
            {this.state.error && <Form.Error data-testid="error">{this.state.error}</Form.Error>}
            <Form.Input
              placeholder="Email address"
              onChange={this.changeEmail}
            />

            <Form.InvalidText hidden={this.state.invalidMail !== true}>
              Please enter a valid mail.
              </Form.InvalidText>
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              onChange={this.changePassword}
            />


            <Form.InvalidText hidden={this.state.invalidPassword !== true}>
              Your password should be 4-60 characters.
              </Form.InvalidText>


            <Form.Label>
              <input type="checkbox"
                defaultChecked={GLOBALS.rememberMe}
                onChange={this.handleChange}
              />
            Remember Me
            </Form.Label>


            <Form.Link to="/forgot">
              Forgot Password?
            </Form.Link>

            <Form.Submit onClick={this.handleSignin} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
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