import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './freqtable';

const ToggleContext = createContext();

export default function Freqtable({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Freqtable.Title = function FreqtableTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Freqtable.Frame = function FreqtableFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Freqtable.Item = function FreqtableItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Freqtable.Header = function FreqtableHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/assets/close-slim.png" alt="Close" />
      ) : (
        <img src="/assets/add.png" alt="Open" />
      )}
    </Header>
  );
};

Freqtable.Body = function FreqtableBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};