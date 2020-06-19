import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

import mainStyles from '../css/main.module.scss';

const Layout: FunctionComponent = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main className={mainStyles.main}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired
};

export default Layout;
