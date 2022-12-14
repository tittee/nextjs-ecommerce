import React from 'react';
import Image from 'next/future/image';
import { ImageProps } from 'interfaces/common';
interface ImagelurProps extends ImageProps {
  quality?: number;
  style?: object;
}

const shimmer = (width: number, height: number) => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const ImageCommon = ({ src, alt, width, height, quality, style }: ImagelurProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`}
      placeholder="blur"
      style={style}
    />
  );
};

export default ImageCommon;
