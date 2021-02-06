import React from 'react';
import { Subheader, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FreqAskedContainer } from '../containers/freqasked';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Subheader>
          <Subheader.Title>Unlimited films, TV programmes and more.</Subheader.Title>
          <Subheader.SubTitle>Watch anywhere. Cancel at any time.</Subheader.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
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
