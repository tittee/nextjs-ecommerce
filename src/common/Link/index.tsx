import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkCommon = ({ href, className, children }: LinkProps) => {
  return (
    <Link href={href} prefetch>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default LinkCommon;
