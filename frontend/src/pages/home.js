import React from 'react';
import { Subheader, Form } from '../components';
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
          <Form>
            <Form.Input placeholder="Email address" />
            <Form.Button>Try it now</Form.Button>
            <Form.Break />
            <Form.Text>Ready to watch? Enter your email to create or restart your membership.</Form.Text>
          </Form>
        </Subheader>
      </HeaderContainer>

      <JumbotronContainer />
      <FreqAskedContainer />
      <FooterContainer />
    </>
  );
}
