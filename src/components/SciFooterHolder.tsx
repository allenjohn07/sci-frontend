'use client';

import dynamic from 'next/dynamic';

const DynamicSciFooter = dynamic(
  () => import('./SciFooter'),
  { ssr: false }
);

const SciFooterHolder = () => {
  return <DynamicSciFooter />;
};

export default SciFooterHolder;