import React from 'react';
import ImageCommon from '@common/Image';
import { BannerProps } from 'interfaces/banner';
import LinkCommon from '@common/Link';

const Banner = ({ title, imageUrl, linkUrl, width = 1220, height = 128 }: BannerProps) => {
  return (
    <div className="py-8 md:py-12">
      <LinkCommon href={linkUrl ?? '/'}>
        <ImageCommon src={imageUrl} alt={title} width={width} height={height} />
      </LinkCommon>
    </div>
  );
};

export default Banner;
