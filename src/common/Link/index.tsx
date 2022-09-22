import React from 'react';
import Link from 'next/link';
import { LinkProps } from 'interfaces/common';

interface LinkChildrenProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  prefetch?: boolean;
  passHref?: boolean;
  isExternal?: boolean;
}

const LinkCommon = ({
  href,
  isExternal,
  className,
  children,
  passHref = false,
  prefetch = false,
}: LinkChildrenProps) => {
  return (
    <Link href={href} passHref={passHref} prefetch={prefetch}>
      <a className={className} target={isExternal ? '_blank' : '_self'}>
        {children}
      </a>
    </Link>
  );
};

export default LinkCommon;
