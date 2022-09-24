import React from 'react';
import ImageCommon from '@common/Image';
import { getBadge } from 'lib/helper';

interface BadgeProps {
  tag: string;
}
const Bagde = ({ tag }: BadgeProps) => {
  const { color, icon } = getBadge(tag);

  return (
    <>
      <ImageCommon
        src={`/assets/svgs/condition/${icon}.svg`}
        alt="gadge"
        width={16}
        height={16}
        style={{ display: 'inline-block' }}
      />
      <span className="font-bold pl-1 pr-1 font-xs" style={{ color: color }}>
        {tag}
      </span>
    </>
  );
};

export default Bagde;
