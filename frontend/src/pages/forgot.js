import React from 'react';
import { Forgotpass } from '../components';
import logo from '../logo.svg';
import { Subheader, OptForm, Form } from '../components';
import * as GLOBALS from '../GLOBALS';


class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: false,
      error: '',
      successMsg: false,
      email: '',
    };
  }

  changeEmail = event => { this.setState({ email: event.target.value }); }

  handleBtn = event => { 
    this.setState({ btnClicked: true})
    const res = GLOBALS.findEmail(this.state.email); 
    if (res !== 1) {
      this.setState({ error: res });
    }
    else {this.setState({ successMsg: true})}
  }

  render() {
    const HOME = '/';
    const SIGN_IN = '/signin';
    return (
      <Forgotpass>
        <Forgotpass.Frame>
          <Forgotpass.Logo to={HOME} src={logo} alt="Netflix" />
          <Forgotpass.ButtonLink id="forgotBtnSignin" to={SIGN_IN}>Sign In</Forgotpass.ButtonLink>
        </Forgotpass.Frame>

        <Form>
          <Form.Title>Forgot Email/Password</Form.Title>
          <Form.Text>Enter email or phone</Form.Text>
          <Form.Input id="forgotInpEmail" placeholder="Email address" onChange={this.changeEmail}/>
          <Form.Input id="forgotInpPhone" placeholder="Phone" />

          {this.state.btnClicked && <> 
            {this.state.successMsg ? <Form.TextSmall id='successMsg' style={{color: 'green'}}>Password reset email sent successfully!</Form.TextSmall>
                  : <Form.TextSmall id='errorMsg' style={{color: 'red'}}>{this.state.error}</Form.TextSmall>}
          </>
          }

          <Form.Link to="/forgot">
            I don't remember email or phone.
            </Form.Link>

          <Form.Submit id="forgotBtnSubmit" onClick={this.handleBtn}>
            Email/Message Me
            </Form.Submit>
        </Form>
      </Forgotpass>
    );
  }
}

export default Forgot;

