import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Minnesota!</p>
    <Link to="/about">Learn about me &rarr;</Link>
  </Layout>
);

export default Index;
