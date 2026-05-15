'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';

export default function Nav({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  return (
    <nav
      className={cn(
        'text-clay justify-center items-center px-4 gap-7 py-2',
        admin
          ? 'bg-primary flex text-primary-foreground'
          : 'bg-transparent hidden md:flex'
      )}>
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  return (
    <Link
      {...props}
      data-active={isActive}
      className={cn(
        'link-underline text-[0.72rem] uppercase tracking-[0.18em] font-medium transition-colors duration-300',
        isActive ? 'text-bloom' : 'text-clay hover:text-bloom'
      )}
    />
  );
}
