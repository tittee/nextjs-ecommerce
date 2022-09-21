import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  prefetch?: boolean;
  passHref?: boolean;
}

const LinkCommon = ({
  href,
  className,
  children,
  passHref = false,
  prefetch = false,
}: LinkProps) => {
  return (
    <Link href={href} passHref={passHref} prefetch={prefetch}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default LinkCommon;
