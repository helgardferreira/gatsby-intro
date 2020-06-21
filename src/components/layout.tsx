import React, { FunctionComponent } from 'react';
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

export default Layout;
