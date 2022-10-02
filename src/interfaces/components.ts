import { ImageProps } from './common';

export interface BannerProps {
  id: number;
  title?: string;
  position?: 'image-left' | 'image-right';
  style?: string;
  background?: 'blue-gradient' | 'white' | 'blue';
  image: ImageProps;
  href?: string;
  isExternal?: boolean;
}

export interface ProductProps {
  id: number;
  slug?: string;
  name: string;
  tag?: 'เหมือนใหม่' | 'สภาพดี' | 'ปานกลาง';
  price?: number;
  image: ImageProps;
  stock?: number;
  created: Date;
  updated: Date;
}

export interface ProductMainProps {
  id?: number;
  title?: string;
  products?: Array<ProductProps>;
}
