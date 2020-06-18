import React from 'react';
import { Link } from 'gatsby';

export default function App() {
  return (
    <>
      <h1>Home</h1>
      <div>Hello Minnesota!</div>
      <Link to="/about">Learn about me &rarr;</Link>
    </>
  );
}
