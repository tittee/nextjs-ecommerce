import { LinkProps } from 'interfaces/common';
import { BannerProps, ProductProps } from 'interfaces/components';

const getSafeLinkUrl = (linkUrl: string) => (linkUrl ? linkUrl.trim() : '');

export const transformLink = ({ href }: LinkProps) => ({
  href: getSafeLinkUrl(href),
});

export const transformProduct = ({ id }: ProductProps) => ({
  id,
});

export const transformBanner = ({
  id,
  title,
  position,
  style,
  background,
  image,
  href,
}: BannerProps) => ({
  id,
  title,
  position,
  href: href ? getSafeLinkUrl(href) : null,
  style,
  background,
  image,
});
