import React from 'react';
// import logo from '../../logo.svg';
import logo_left from '../../assets/logo_left.png'
import logo_right from '../../assets/logo_right.png'

import { Container } from './styles';

export default function Logo(props) {
  return (
    <Container {...props}>
      <div className="left">
        <img src={logo_left} alt="logo" />
        <div className="dot" />
      </div>
      <div className="right">
        <img src={logo_right} alt="logo" />
        <div className="dot" />
      </div>
    </Container>
  );
}
