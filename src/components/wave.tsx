import React from 'react';
import { useState, FunctionComponent } from 'react';

import postsStyles from '../css/posts.module.scss';

const Wave: FunctionComponent = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button className={postsStyles.wave} onClick={() => setWaves(waves + 1)}>
      {label}
    </button>
  );
};

export default Wave;
