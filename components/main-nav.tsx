'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>
      <nav className='flex items-center gap-6 text-sm'>
        <Link
          href='/#features'
          className={cn('transition-colors hover:text-foreground/80')}
        >
          Features
        </Link>
        <Link
          href='/pricing'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/pricing')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Pricing
        </Link>
        <Link
          href='/docs'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Docs
        </Link>
        <Link
          href='/blog'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/blog')
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
