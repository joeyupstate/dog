import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    const PAGES = [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'Services',
        to: '/services'
      },
      {
        title: 'Our Story',
        to: '/about'
      }
   
    ];

    return (
      <div className="nav">
        {PAGES.map((page) => (
          <Link
            to={page.to}
            className="item"
            key={page.title}
            onClick={this.props.toggleMenu}
          >
            {page.title}
          </Link>
        ))}
        <div
          className="close"
          id="close-nav"
          onClick={this.props.toggleMenu}
        >
          <p>X</p>
        </div>
      </div>
    );
  }
}

export default Nav;
