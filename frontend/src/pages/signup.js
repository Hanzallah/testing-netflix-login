// import React, { useState } from 'react';
import React, { Component } from 'react';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

// export default function SignUp(mail) {

//   const [firstName, setFirstName] = useState('');
//   const [emailAddress, setEmailAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [error] = useState('');

//   const isInvalid = firstName === '' || password === '' || emailAddress === '';

//   const handleSignup = (event) => {
//     alert("CALISIYO BABACAN");
//   };

//   return (
//     console.log({ mail }),
//     <>
//       <HeaderContainer>
//         <Form>
//           <Form.Title>Sign Up</Form.Title>
//           {error && <Form.Error>{error}</Form.Error>}

//           <Form.Base onSubmit={handleSignup} method="POST">
//             <Form.Input
//               placeholder="First name"
//               value={firstName}
//               onChange={({ target }) => setFirstName(target.value)}
//             />
//             <Form.Input
//               placeholder={mail}
//               value={emailAddress}
//               onChange={({ target }) => setEmailAddress(target.value)}
//             />
//             <Form.Input
//               type="password"
//               value={password}
//               autoComplete="off"
//               placeholder="Password"
//               onChange={({ target }) => setPassword(target.value)}
//             />
//             <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-up">
//               Sign Up
//             </Form.Submit>
//           </Form.Base>

//           <Form.Text>
//             Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
//           </Form.Text>
//           <Form.TextSmall>
//             This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
//           </Form.TextSmall>
//         </Form>
//       </HeaderContainer>
//       <FooterContainer />
//     </>
//   );
// }
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: 'cancel',
      firstName: '',
      setFirstName: '',
      emailAddress: '',
      setEmailAddress: '',
      password: '',
      setPassword: '',
      error: '',
      isInvalid: this.firstName === '' || this.password === '' || this.emailAddress === '',
    }
  }
  changePreview(selected) {
    this.setState({ preview: selected });
    console.log(this.state);
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

            <Form.Base onSubmit={this.handleSignup} method="POST">
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
