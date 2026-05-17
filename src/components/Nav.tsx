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
        'justify-center items-center px-4 gap-7 py-2',
        admin
          ? 'bg-primary flex text-primary-foreground'
          : 'bg-transparent hidden md:flex text-clay'
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
        'link-underline text-[0.72rem] uppercase tracking-[0.18em] transition-opacity duration-300',
        // Color inherits from the parent <Nav>: text-clay on the customer
        // header (good on cream), text-primary-foreground on the admin bar
        // (good on pink). Active uses weight, not colour, so it reads on both.
        isActive ? 'font-bold opacity-100' : 'font-medium opacity-80 hover:opacity-100'
      )}
    />
  );
}
