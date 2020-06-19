import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import headerStyles from '../css/header.module.scss';

const Header: FunctionComponent = () => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.brand}>FEM Workshop</Link>
    <nav>
      <Link to="/" activeClassName={headerStyles.currentPage}>
        Home
      </Link>
      <Link to="/about" activeClassName={headerStyles.currentPage}>
        About
      </Link>
    </nav>
  </header>
);

export default Header;
