import React from 'react';
import { Link } from 'gatsby';

export default function App() {
  return (
    <>
      <h1>Home</h1>
      <p>Hello Minnesota!</p>
      <Link to="/about">Learn about me &rarr;</Link>
    </>
  );
}
