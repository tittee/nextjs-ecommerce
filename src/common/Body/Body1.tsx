import { PropsWithChildren } from 'react';
import { clsx } from 'clsx';
export interface Body1Props {
  isBold?: boolean;
  textColor?: string;
  style?: object;
}

const Body1 = ({
  children,
  isBold = false,
  textColor = 'text-gray-800',
  style,
}: PropsWithChildren<Body1Props>) => (
  <span
    className={clsx('leading-8', 'text-[1.5rem]', textColor, isBold ? 'font-bold' : 'font-normal')}
    style={style}
  >
    {children}
  </span>
);

export default Body1;
