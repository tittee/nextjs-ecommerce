import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface Body3Props {
  isBold?: boolean;
  textColor?: string;
  style?: object;
}

const Body3 = ({
  children,
  isBold = false,
  textColor = 'text-gray-300',
  style,
}: PropsWithChildren<Body3Props>) => (
  <span
    className={clsx(
      'leading-[1.625rem]',
      textColor,
      'text-base',
      isBold ? 'font-bold' : 'font-normal'
    )}
    style={style}
  >
    {children}
  </span>
);

export default Body3;
