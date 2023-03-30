import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface INavigationItems {
  name: string;
  link: string;
}

const navigation: INavigationItems[] = [
  {
    name: 'MAIN',
    link: '/',
  },
  {
    name: 'ABOUT US',
    link: '/about-us',
  },
  {
    name: 'FORM',
    link: '/form',
  },
  {
    name: '404',
    link: '/not-found',
  },
];

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <nav className="navigation">
        <ul className="navigation-list">
          {navigation.map((el, index) => {
            return (
              <li key={index} className="navigation-item">
                <Link className="navigation-item-link" to={el.link}>
                  {el.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
