import { graphql, useStaticQuery } from 'gatsby';

export interface ISiteMetadata {
  title: string;
  description: string;
}

interface ISiteQuery {
  site: {
    siteMetadata: ISiteMetadata;
  };
}

const useSiteMetadata = (): ISiteMetadata => {
  const data: ISiteQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
