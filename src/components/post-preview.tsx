import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { IPost } from '../hooks/use-posts';

import postsStyles from '../css/posts.module.scss';

const PostPreview: FunctionComponent<IPost> = ({
  author,
  excerpt,
  title,
  slug
}) => (
  <article className={postsStyles.postPreview}>
    <h3>
      <Link to={slug}>{title}</Link>
    </h3>
    <h4>{author}</h4>
    <p>{excerpt}</p>
    <Link to={slug} className={postsStyles.readLink}>
      read this post &rarr;
    </Link>
  </article>
);

export default PostPreview;
