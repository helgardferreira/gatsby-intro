import { graphql, useStaticQuery } from 'gatsby';

export interface IPost {
  author: string;
  excerpt: string;
  title: string;
  slug: string;
}

interface IRawPost {
  frontmatter: {
    author: string;
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
      ({ excerpt, frontmatter: { author, title, slug } }): IPost => ({
        author,
        excerpt,
        title,
        slug
      })
    );
};

export default usePosts;
