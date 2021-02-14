import React from 'react';
import { Subheader, OptForm } from '../components';
import * as GLOBALS from '../GLOBALS';
import history from "./history"
import IdleTimerContainer from '../components/IdleTimerContainer';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log("logOut clicked");
    GLOBALS.setIsSignedIn(false);
    GLOBALS.setMailAddress("");
    history.push('/');
  }


  render() {

    return (
      <>
        <IdleTimerContainer>
          <Subheader>
            <Subheader.Title>Welcome</Subheader.Title>
            <OptForm>
              <OptForm.ButtonLink onClick={this.clickHandler} id="mainBtnHome">  Log Out</OptForm.ButtonLink>
              <OptForm.Break />
            </OptForm>
          </Subheader>
        </IdleTimerContainer>
      </>
    );
  }
}

export default Main;

