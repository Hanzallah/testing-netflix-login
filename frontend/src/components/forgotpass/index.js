import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Background,
  Link,
  ButtonLink,
  Text,
  Logo,
} from './forgotpass';

export default function Forgotpass({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="forgot" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Forgotpass.Frame = function ForgotpassFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Forgotpass.Logo = function ForgotpassLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};//

Forgotpass.TextLink = function ForgotpassTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Forgotpass.Text = function ForgotpassText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Forgotpass.ButtonLink = function ForgotpassButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};