import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface BodyLinkProps {
  isBold?: boolean;
  textColor?: string;
  style?: object;
}

const BodyLink = ({
  children,
  isBold = false,
  textColor = 'text-textColor',
  style,
}: PropsWithChildren<BodyLinkProps>) => (
  <span
    className={clsx(
      'leading-[1.1875rem]',
      textColor,
      'text-sm',
      isBold ? 'font-bold' : 'font-normal'
    )}
    style={style}
  >
    {children}
  </span>
);

export default BodyLink;
