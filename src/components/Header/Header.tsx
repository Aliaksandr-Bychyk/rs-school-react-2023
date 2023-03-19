import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  title: string;
}
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
    name: '404',
    link: '/not-found',
  },
];

class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <header className="header">
          <h1 className="header-title">{this.props.title}</h1>
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
      </>
    );
  }
}

export default Header;
