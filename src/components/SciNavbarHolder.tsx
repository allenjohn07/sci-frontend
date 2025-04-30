'use client';

import dynamic from 'next/dynamic';

const DynamicSciNavbar = dynamic(
  () => import('./SciNavbar').then((mod) => mod.SciNavbar),
  { ssr: false }
);

const SciNavbarHolder = () => {
  return <DynamicSciNavbar />;
};

export default SciNavbarHolder;