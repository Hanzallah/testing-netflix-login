import React from 'react';
import { Forgotpass } from '../components';
import logo from '../logo.svg';
import { Subheader, OptForm, Form } from '../components';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const HOME = '/';
    const SIGN_IN = '/signin';
    return (
      <Forgotpass>
        <Forgotpass.Frame>
          <Forgotpass.Logo to={HOME} src={logo} alt="Netflix" />
          <Forgotpass.ButtonLink to={SIGN_IN}>Sign In</Forgotpass.ButtonLink>
        </Forgotpass.Frame>      

          <Form>
            <Form.Title>Forgot Password</Form.Title>
            <Form.Text>Enter email or phone</Form.Text>
              <Form.Input placeholder="Email address"/>
              <Form.Input placeholder="Phone"/>


              <Form.Link to="/forgot">
              Do not remember email or phone.
            </Form.Link>

              <Form.Submit >
                Send email or message
            </Form.Submit>
          </Form>
      </Forgotpass>
    );
  }
}

export default Forgot;

