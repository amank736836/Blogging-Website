import React from 'react';
import LightLogo from '../assets/logo-light2.png';
import DarkLogo from '../assets/logo-dark2.png';
import useTheme from '../hooks/useTheme.js';

function Logo({ width = '100px' }) {
  const { themeMode } = useTheme();
  // console.log(themeMode);
  const logo = themeMode == "dark" ? DarkLogo : LightLogo;

  return (
    <img className='rounded-full' src={logo} alt="Logo" width={width} />
  );
}

export default Logo;
