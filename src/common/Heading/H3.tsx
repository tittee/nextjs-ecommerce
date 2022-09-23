import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { HeadingProps } from 'interfaces/common';

const Heading3 = ({
  children,
  textColor = 'text-gray-800',
  style,
}: PropsWithChildren<HeadingProps>) => (
  <h3 className={clsx('text-3xl font-bold', textColor)} style={style}>
    {children}
  </h3>
);

export default Heading3;
