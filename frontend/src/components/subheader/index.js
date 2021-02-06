import React from 'react';
import { Container, Title, SubTitle } from './subheader';

export default function Subheader({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Subheader.Title = function SubheaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Subheader.SubTitle = function SubheaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};