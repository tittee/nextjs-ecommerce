import { ImageProps } from './image';

export interface BannerProps {
  title: string;
  position: string;
  style: string;
  background: string;
  image: ImageProps;
  url?: string;
}
