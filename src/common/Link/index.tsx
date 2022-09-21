import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  prefetch?: boolean;
}

const LinkCommon = ({ href, className, children, prefetch = false }: LinkProps) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default LinkCommon;
