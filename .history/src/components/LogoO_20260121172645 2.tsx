import React from 'react';
import logo from '../assets/logo.png';

export function LogoO({ className = '', style = {} }) {
  return (
    <img src={logo} alt="Owona Media Logo" className={className} style={style} />
  );
}

export default LogoO;
