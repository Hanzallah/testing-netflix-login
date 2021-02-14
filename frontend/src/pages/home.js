import React from 'react';
import { Subheader, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FreqAskedContainer } from '../containers/freqasked';
import { FooterContainer } from '../containers/footer';
import * as GLOBALS from '../GLOBALS';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password1: '', password2: '', vPass1: '', vPass2: '', message: '' };
    this.clickHandler = this.clickHandler.bind(this);
    this.setMail = this.setMail.bind(this);
  }

  clickHandler() {
    console.log("It Works");
  }


  setMail(val) {
    GLOBALS.setMailAddress(val.target.value);
  }

  render() {


    return (
      <>
        <HeaderContainer>
          <Subheader>
            <Subheader.Title>Unlimited films, TV programmes and more.</Subheader.Title>
            <Subheader.SubTitle>Watch anywhere. Cancel at any time.</Subheader.SubTitle>
            <OptForm>
              <OptForm.Input id="homeInpEmailAddress" placeholder="Email address" onChange={this.setMail} />
              <OptForm.ButtonLink id="homeBtnTryItNow" to="/signup">  Try it now</OptForm.ButtonLink>
              <OptForm.Break />
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            </OptForm>
          </Subheader>
        </HeaderContainer>

        <JumbotronContainer />
        <FreqAskedContainer />
        <FooterContainer />
      </>
    );
  }
}

export default Home;

