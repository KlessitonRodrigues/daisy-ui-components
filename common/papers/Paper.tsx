import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface PaperProps extends HTMLAttributes<HTMLDivElement> {}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;

  return (
    <div
      className={twMerge(
        'paper w-full space-y-4 rounded-sm bg-bg1 p-6 shadow-sm slide-up',
        className,
      )}
      {...paperProps}
    >
      {children}
    </div>
  );
};
