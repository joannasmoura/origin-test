import React from 'react';
import './Header.scss';
import {ReactComponent as OriginLogo} from '../../assets/icons/origin-logo.svg';

const Header = () => {
  return (
    <div className="header">
      <OriginLogo className={'logo'} />
    </div>
  );
}

export default Header;
