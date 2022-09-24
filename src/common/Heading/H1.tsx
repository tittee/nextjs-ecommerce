import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import { HeadingProps } from 'interfaces/common';

const Heading1 = ({
  children,
  textColor = 'text-gray-800',
  style,
}: PropsWithChildren<HeadingProps>) => (
  <h1 className={clsx('leading-17 text-[2.75rem] font-bold', textColor)} style={style}>
    {children}
  </h1>
);

export default Heading1;
