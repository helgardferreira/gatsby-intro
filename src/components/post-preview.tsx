import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import { IPost } from '../hooks/use-posts';

import postsStyles from '../css/posts.module.scss';

const PostPreview: FunctionComponent<IPost> = ({
  author,
  excerpt,
  image,
  title,
  slug
}) => (
  <article className={postsStyles.postPreview}>
    <Link to={slug} className={postsStyles.previewImage}>
      <Image fluid={image.sharp.fluid} alt={title} />
    </Link>
    <div>
      <h3>
        <Link to={slug}>{title}</Link>
      </h3>
      <h4>{author}</h4>
      <p>{excerpt}</p>
      <Link to={slug} className={postsStyles.readLink}>
        read this post &rarr;
      </Link>
    </div>
  </article>
);

export default PostPreview;
