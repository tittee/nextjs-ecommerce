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
  href?: string;
  name: string;
  tag?: 'เหมือนใหม่' | 'สภาพดี' | 'ปานกลาง';
  description: string;
  price: number;
  image: ImageProps;
  seller: string;
  stock: number;
  dateCreated: Date;
  updatedDate: Date;
}

export interface ProductMainProps {
  id?: number;
  title?: string;
  products?: Array<ProductProps>;
}
