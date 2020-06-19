import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import mainStyles from '../css/main.module.scss';
import Header from './header';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <main className={mainStyles.main}>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
