import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';

export function InHeaderContainer({ children }) {
  const HOME = '/';
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={HOME} src={logo} alt="Netflix" />
      </Header.Frame>
      {children}
    </Header>
  );
}