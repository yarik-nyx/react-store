import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="10" rx="10" ry="10" width="280" height="250" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="89" />
    <rect x="0" y="423" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="415" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);
