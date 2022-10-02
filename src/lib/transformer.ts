import { LinkProps } from 'interfaces/common';
import { BannerProps, ProductProps, ProductMainProps } from 'interfaces/components';

const getSafeLinkUrl = (linkUrl: string) => (linkUrl ? linkUrl.trim() : '');

export const transformLink = ({ href }: LinkProps) => ({
  href: getSafeLinkUrl(href),
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

export const transformMainProduct = (data): ProductMainProps => ({
  id: data.id,
  products: data.products ? data.products.map((p) => transformProduct(p)) : null,
});

export const transformProduct = (data): ProductProps => ({
  id: data.id,
  slug: getSafeLinkUrl(data.slug),
  name: data.name,
  tag: data.tag,
  price: data.price,
  image: data.image,
  created: data.created,
  updated: data.updated,
});
