import React from 'react';
import { Header, HeaderContent } from '../styles/components/Header';

import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';

const HeaderComponent: React.FC = () => (
  <Header>
    <HeaderContent>
      <Logo />
      <nav>
        <ul>
          <li>Cases</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <Menu />
    </HeaderContent>
  </Header>
);

export default HeaderComponent;
