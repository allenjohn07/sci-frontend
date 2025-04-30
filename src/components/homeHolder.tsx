'use client';

import dynamic from 'next/dynamic';

const DynamicHome = dynamic(
  () => import('./home').then((mod) => mod.HomeComponent),
  { ssr: false }
);

const HomeComponent = () => {
  return <DynamicHome />;
};

export default HomeComponent;