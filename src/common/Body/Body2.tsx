import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface Body2Props {
  isBold?: boolean;
  textColor?: string;
  style?: object;
}

const Body2 = ({
  children,
  isBold = false,
  textColor = 'text-textColor',
  style,
}: PropsWithChildren<Body2Props>) => (
  <span
    className={clsx('leading-tight', textColor, 'text-sm', isBold ? 'font-bold' : 'font-normal')}
    style={style}
  >
    {children}
  </span>
);

export default Body2;
