'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../buttons/Button';
import { Icons } from '../icons/Icons';
import { SwapElements } from '../swap/SwapElements';

interface ResponsiveButtonProps {
  icon?: 'menu' | 'dots';
  position?: 'bottom' | 'top';
  children: React.ReactNode;
}

export const ResponsiveButton = (props: ResponsiveButtonProps) => {
  const { icon, position, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="hidden lg:flex">{children}</div>
      <div className="lg:hidden">
        <Button
          ghost
          variant="square"
          size="lg"
          className="transition"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <SwapElements
            active={!isOpen}
            swapEffect="rotate"
            offElement={<Icons iconType={icon || 'menu'} iconSize="2rem" />}
            onElement={<Icons iconType="close" iconSize="2rem" />}
          />
        </Button>
        <div
          className={twMerge(
            'fixed z-20 left-2 w-[94vw] p-6 bg-bg1 rounded-lg shadow-sm border',
            position === 'top' ? '-mt-60' : 'mt-4',
          )}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
