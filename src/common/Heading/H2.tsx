import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { HeadingProps } from 'interfaces/common';

const Heading2 = ({
  children,
  textColor = 'text-gray-800',
  style,
}: PropsWithChildren<HeadingProps>) => (
  <h2 className={clsx('text-2xl font-bold', textColor)} style={style}>
    {children}
  </h2>
);

export default Heading2;
