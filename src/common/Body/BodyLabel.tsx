import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface BodyLabelProps {
  htmlFor?: string;
  isBold?: boolean;
  textColor?: string;
  style?: object;
}

const BodyLabel = ({
  children,
  htmlFor,
  isBold = false,
  textColor = 'text-textColor',
  style,
}: PropsWithChildren<BodyLabelProps>) => (
  <label
    htmlFor={htmlFor}
    className={clsx('block text-base', textColor, isBold ? 'font-bold' : 'font-normal')}
    style={style}
  >
    {children}
  </label>
);

export default BodyLabel;
