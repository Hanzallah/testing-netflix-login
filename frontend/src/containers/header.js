import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
  const HOME = '/';
  const SIGN_IN = '/signin';
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}