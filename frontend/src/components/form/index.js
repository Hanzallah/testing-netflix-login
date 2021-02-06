import React from 'react';
import { Container, Input, Break, Button, Text } from './form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/assets/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Break = function FormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};