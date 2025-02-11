/* eslint-disable no-undef */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts
    .filter(({ frontmatter: { slug } }) => !!slug)
    .forEach(post => {
      actions.createPage({
        path: post.frontmatter.slug,
        component: require.resolve('./src/templates/post.tsx'),
        context: {
          slug: post.frontmatter.slug
        }
      });
    });
};
