import Link from 'next/link';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

import { Column } from '../containers/Flex';
import { IconProps, Icons } from '../icons/Icons';
import { Text } from '../text/Text';

export interface DescriptionMenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps['iconType'];
    label: string;
    description?: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
  }[];
}

export const DescriptionMenu = (props: DescriptionMenuProps) => {
  const { className, items, ...menuProps } = props;
  const classNames = [`menu w-full h-full lg:min-w-md bg-bg1 ${className}`];

  return (
    <ul className={twMerge(...classNames)} {...menuProps}>
      {items?.map((item, index) => {
        const activeItem = item.active ? 'bg-main text-white' : 'bg-bg1 text-fg1';
        return (
          <li key={index}>
            <Link href={item.href || ''} onClick={item.onClick}>
              <div className={`border rounded-md p-2 w-10 ${activeItem}`}>
                <Icons iconType={item.icon} />
              </div>
              <Column flexX="start" gap={0}>
                <Text size="lg" bold className="text-main">
                  {item.label}
                </Text>
                <Text tag="p" size="sm" opacity="70">
                  {item.description}
                </Text>
              </Column>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
