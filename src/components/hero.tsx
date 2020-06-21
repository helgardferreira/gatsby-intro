import React, { FunctionComponent } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage, {
  InferExtraProps,
  IBackgroundImageProps,
  IFluidObject
} from 'gatsby-background-image';

import heroStyles from '../css/hero.module.scss';

const ImageBackground: FunctionComponent<InferExtraProps<'section'> &
  IBackgroundImageProps> = ({ children, Tag, fluid, fadeIn }) => (
  <BackgroundImage
    Tag={Tag}
    fluid={fluid}
    fadeIn={fadeIn}
    className={heroStyles.hero}
  >
    {children}
  </BackgroundImage>
);

const TextBox: FunctionComponent = ({ children }) => (
  <div className={heroStyles.heroText}>{children}</div>
);

interface ISharpFluidQuery {
  image: {
    sharp: {
      fluid: IFluidObject;
    };
  };
}

const Hero: FunctionComponent = () => {
  const { image }: ISharpFluidQuery = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nicole-harrington-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log(JSON.stringify(image.sharp.fluid, null, 2));

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Frontend Masters + Gatsby &hearts;</h1>
        <p>
          Hello Minnesota! <Link to="/about">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
