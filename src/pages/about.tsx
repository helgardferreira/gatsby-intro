import React from 'react';
import { Link } from 'gatsby';

import aboutStyles from '../css/about.module.scss';

export default function About() {
  return (
    <div className={aboutStyles.container}>
      <h1>About Me</h1>
      <p>This is my personal website.</p>
      <Link to="/">&larr; Back to home</Link>
    </div>
  );
}
