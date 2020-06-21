import React, { FunctionComponent } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

import postsStyles from '../css/posts.module.scss';

interface IDataType {
  mdx: {
    frontmatter: {
      title: string;
      author: string;
    };
    body: string;
  };
}

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate: FunctionComponent<PageProps<IDataType>> = ({
  data: { mdx: post }
}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p className={postsStyles.postAuthor}>
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/" className={postsStyles.readLink}>
      &larr; back to all posts
    </Link>
  </Layout>
);

export default PostTemplate;
