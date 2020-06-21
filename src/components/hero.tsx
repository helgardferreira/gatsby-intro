import React, { FunctionComponent } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import heroStyles from '../css/hero.module.scss';

const ImageBackground: FunctionComponent = ({ children }) => (
  <div className={heroStyles.hero}>{children}</div>
);

const TextBox: FunctionComponent = ({ children }) => (
  <div className={heroStyles.heroText}>{children}</div>
);

const Hero: FunctionComponent = () => (
  <ImageBackground>
    <TextBox>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello Minnesota! <Link to="/about/">Learn about me &rarr;</Link>
      </p>
    </TextBox>
  </ImageBackground>
);

export default Hero;
