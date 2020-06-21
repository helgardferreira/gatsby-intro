import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

interface IFluidImage {
  sharp: {
    fluid: FluidObject;
  };
}

export interface IPost {
  author: string;
  excerpt: string;
  image: IFluidImage;
  title: string;
  slug: string;
}

interface IRawPost {
  frontmatter: {
    author: string;
    image: IFluidImage;
    title: string;
    slug: string;
  };
  excerpt: string;
}

interface IPostQuery {
  allMdx: {
    nodes: IRawPost[];
  };
}

const usePosts = (): IPost[] => {
  const data: IPostQuery = useStaticQuery(graphql`
    query {
      allMdx {
        # the data that is returned by allMdx
        nodes {
          frontmatter {
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            slug
          }
          excerpt
          fileAbsolutePath
        }
      }
    }
  `);

  // Only show posts that have necessary meta front matter
  return data.allMdx.nodes
    .filter(
      ({ frontmatter: { author, slug, title } }) =>
        !!author && !!title && !!slug
    )
    .map(
      ({ excerpt, frontmatter: { author, image, title, slug } }): IPost => ({
        author,
        excerpt,
        image,
        title,
        slug
      })
    );
};

export default usePosts;
